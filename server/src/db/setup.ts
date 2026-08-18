import fs from 'fs'
import path from 'path'
import { pool, testConnection } from './pool.js'

async function runSetup() {
  console.log('🚀 Iniciando configuração e migração do banco PostgreSQL CORETO...')

  const connected = await testConnection()
  if (!connected) {
    console.error('❌ Falha ao conectar ao banco. Verifique se o PostgreSQL está rodando (ex: docker-compose up -d) e suas credenciais no .env')
    process.exit(1)
  }

  try {
    const schemaPath = path.resolve(process.cwd(), 'database', 'init', '01_schema.sql')
    const seedPath = path.resolve(process.cwd(), 'database', 'init', '02_seed.sql')
    const bubbleTablesPath = path.resolve(process.cwd(), 'database', 'init', '03_bubble_tables.sql')
    const bubbleInsertsPath = path.resolve(process.cwd(), 'database', 'init', '04_bubble_inserts.sql')

    console.log(`📄 [1/4] Executando DDL Schema Moderno: ${schemaPath}`)
    const schemaSql = fs.readFileSync(schemaPath, 'utf-8')
    await pool.query(schemaSql)
    console.log('✅ Schema moderno criado!')

    console.log(`🌱 [2/4] Executando Seed Moderno: ${seedPath}`)
    const seedSql = fs.readFileSync(seedPath, 'utf-8')
    await pool.query(seedSql)
    console.log('✅ Seed moderno inserido!')

    console.log(`📄 [3/4] Executando DDL das 75 Tabelas Legadas (Bubble): ${bubbleTablesPath}`)
    const bubbleTablesSql = fs.readFileSync(bubbleTablesPath, 'utf-8')
    await pool.query(bubbleTablesSql)
    console.log('✅ 75 Tabelas legadas criadas!')

    console.log(`🌱 [4/4] Executando Inserts das 75 Tabelas Legadas: ${bubbleInsertsPath}`)
    const bubbleInsertsSql = fs.readFileSync(bubbleInsertsPath, 'utf-8')
    await pool.query(bubbleInsertsSql)
    console.log('✅ Inserts das 75 tabelas concluídos!')

    console.log('🎉 Setup completo do banco PostgreSQL finalizado com êxito!')
  } catch (error) {
    console.error('❌ Erro durante o setup do banco de dados:', error)
    process.exit(1)
  } finally {
    await pool.end()
  }
}

runSetup()

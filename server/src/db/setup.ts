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

    console.log(`📄 Executando DDL Schema: ${schemaPath}`)
    const schemaSql = fs.readFileSync(schemaPath, 'utf-8')
    await pool.query(schemaSql)
    console.log('✅ Tabelas, índices e triggers criados com sucesso!')

    console.log(`🌱 Executando Seed de Dados: ${seedPath}`)
    const seedSql = fs.readFileSync(seedPath, 'utf-8')
    await pool.query(seedSql)
    console.log('✅ Dados de seed reais do ecossistema CORETO inseridos com sucesso!')

    console.log('🎉 Setup do banco PostgreSQL finalizado com êxito!')
  } catch (error) {
    console.error('❌ Erro durante o setup do banco de dados:', error)
    process.exit(1)
  } finally {
    await pool.end()
  }
}

runSetup()

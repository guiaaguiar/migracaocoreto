import fs from 'fs'
import path from 'path'
import { pool, testConnection } from './pool.js'

async function runBubbleMigration() {
  console.log('=============================================================================')
  console.log('🚀 MIGRAÇÃO DAS 75 TABELAS DO CORETO (BUBBLE DATA TYPES -> POSTGRESQL)')
  console.log('=============================================================================')

  const connected = await testConnection()
  if (!connected) {
    console.error('❌ Falha ao conectar ao banco PostgreSQL.')
    console.error('👉 Verifique o arquivo .env (PGUSER, PGPASSWORD, PGHOST, PGPORT, PGDATABASE)')
    process.exit(1)
  }

  try {
    const ddlPath = path.resolve(process.cwd(), 'database', 'init', '03_bubble_tables.sql')
    const insertsPath = path.resolve(process.cwd(), 'database', 'init', '04_bubble_inserts.sql')

    console.log(`\n📄 [1/2] Executando DDL das 75 Tabelas Legadas: ${ddlPath}`)
    const ddlSql = fs.readFileSync(ddlPath, 'utf-8')
    await pool.query(ddlSql)
    console.log('✅ Todas as 75 tabelas legadas foram criadas com sucesso no PostgreSQL!')

    console.log(`\n🌱 [2/2] Executando Inserts de Dados: ${insertsPath}`)
    const insertsSql = fs.readFileSync(insertsPath, 'utf-8')
    await pool.query(insertsSql)
    console.log('✅ Dados de seed inseridos em todas as tabelas com sucesso!')

    // Validação da contagem de tabelas criadas
    const countRes = await pool.query<{ count: string }>(`
      SELECT count(*) as count 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
    `)
    console.log(`\n📊 Total de tabelas disponíveis no esquema public: ${countRes.rows[0].count}`)
    console.log('🎉 Migração e Inserts concluídos com êxito!')
  } catch (error) {
    console.error('❌ Erro durante a execução da migração:', error)
    process.exit(1)
  } finally {
    await pool.end()
  }
}

runBubbleMigration()

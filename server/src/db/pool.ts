import pg from 'pg'
import dotenv from 'dotenv'
import path from 'path'

// Carrega .env da raiz do projeto
dotenv.config({ path: path.resolve(process.cwd(), '.env') })

const { Pool } = pg

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL || undefined,
  host: process.env.PGHOST || 'localhost',
  port: parseInt(process.env.PGPORT || '5432', 10),
  user: process.env.PGUSER || 'postgres',
  password: process.env.PGPASSWORD || 'postgres',
  database: process.env.PGDATABASE || 'coreto_db',
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 5000,
})

pool.on('error', (err) => {
  console.error('⚠️ Erro inesperado no pool do PostgreSQL:', err)
})

export async function query<T extends pg.QueryResultRow = any>(text: string, params?: any[]): Promise<pg.QueryResult<T>> {
  const start = Date.now()
  try {
    const res = await pool.query<T>(text, params)
    const duration = Date.now() - start
    if (process.env.NODE_ENV === 'development') {
      console.log(`[DB Query] ${text.trim().substring(0, 80)}... (${duration}ms, rows: ${res.rowCount})`)
    }
    return res
  } catch (error) {
    console.error(`❌ Erro na query PostgreSQL: "${text}"`, error)
    throw error
  }
}

export async function testConnection(): Promise<boolean> {
  try {
    const res = await pool.query('SELECT NOW() as current_time, current_database() as db')
    console.log(`✅ Conexão com PostgreSQL estabelecida com sucesso! [DB: ${res.rows[0].db}, Time: ${res.rows[0].current_time}]`)
    return true
  } catch (err: any) {
    console.warn(`⚠️ Não foi possível conectar ao PostgreSQL: ${err.message}`)
    return false
  }
}

import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import path from 'path'
import { testConnection } from './db/pool.js'
import startupsRoutes from './routes/startups.routes.js'
import oportunidadesRoutes from './routes/oportunidades.routes.js'
import ecossistemaRoutes from './routes/ecossistema.routes.js'
import boRoutes from './routes/bo.routes.js'
import programsRoutes from './routes/programs.routes.js'
import organizationsRoutes from './routes/organizations.routes.js'
import usersRoutes from './routes/users.routes.js'

// Carregar variáveis de ambiente
dotenv.config({ path: path.resolve(process.cwd(), '.env') })

const app = express()
const PORT = process.env.PORT || 3001

// Middlewares
app.use(cors({ origin: true, credentials: true }))
app.use(express.json())

// Logger simples de requisições
app.use((req, res, next) => {
  const start = Date.now()
  res.on('finish', () => {
    const duration = Date.now() - start
    console.log(`[API] ${req.method} ${req.originalUrl} - ${res.statusCode} (${duration}ms)`)
  })
  next()
})

// Rota de Health Check
app.get('/api/health', async (_req, res) => {
  const dbOk = await testConnection()
  res.json({
    status: 'ok',
    service: 'CORETO Backend API',
    database: dbOk ? 'connected' : 'disconnected',
    timestamp: new Date().toISOString(),
  })
})

// Rotas da Aplicação
app.use('/api/startups', startupsRoutes)
app.use('/api/oportunidades', oportunidadesRoutes)
app.use('/api/ecossistema', ecossistemaRoutes)
app.use('/api/bo', boRoutes)
app.use('/api/programs', programsRoutes)
app.use('/api/organizations', organizationsRoutes)
app.use('/api/users', usersRoutes)

// Rota 404 para API
app.use('/api/*', (_req, res) => {
  res.status(404).json({ success: false, message: 'Endpoint da API não encontrado' })
})

// Iniciar servidor
app.listen(PORT, async () => {
  console.log(`\n======================================================`)
  console.log(`🚀 Servidor CORETO API rodando em http://localhost:${PORT}`)
  console.log(`📊 Health Check disponível em http://localhost:${PORT}/api/health`)
  console.log(`======================================================\n`)

  await testConnection()
})

export default app

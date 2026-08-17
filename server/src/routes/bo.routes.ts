import { Router, Request, Response } from 'express'
import { query } from '../db/pool.js'

const router = Router()

// GET /api/bo/stats - Estatísticas consolidadas para o painel do Back Office
router.get('/stats', async (_req: Request, res: Response) => {
  try {
    const [orgsRes, startupsRes, usersRes, oppsRes, inscriptsRes] = await Promise.all([
      query('SELECT COUNT(*)::int as count FROM organizations'),
      query('SELECT COUNT(*)::int as count FROM startups'),
      query('SELECT COUNT(*)::int as count, COUNT(*) FILTER (WHERE status = \'completo\')::int as completos FROM users'),
      query('SELECT COUNT(*)::int as count FROM opportunities WHERE status = \'Inscrições Abertas\''),
      query('SELECT COUNT(*)::int as count FROM inscriptions'),
    ])

    res.json({
      success: true,
      data: {
        totalOrganizations: orgsRes.rows[0].count,
        totalStartups: startupsRes.rows[0].count,
        totalUsers: usersRes.rows[0].count,
        completeUsers: usersRes.rows[0].completos,
        activeOpportunities: oppsRes.rows[0].count,
        totalInscriptions: inscriptsRes.rows[0].count,
      },
    })
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message })
  }
})

// GET /api/bo/initiatives - Listar iniciativas do BO
router.get('/initiatives', async (_req: Request, res: Response) => {
  try {
    const sql = `
      SELECT 
        i.id,
        i.title,
        i.status,
        i.date_display as "date",
        i.link,
        o.name as "organizationName"
      FROM initiatives i
      LEFT JOIN organizations o ON i.organization_id = o.id
      ORDER BY i.created_at DESC
    `
    const result = await query(sql)
    res.json({ success: true, count: result.rowCount, data: result.rows })
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message })
  }
})

// GET /api/bo/users - Listar usuários do BO
router.get('/users', async (_req: Request, res: Response) => {
  try {
    const sql = `
      SELECT 
        id,
        name,
        email,
        role,
        status,
        tags,
        TO_CHAR(created_at, 'DD/MM/YYYY HH24:MI') as "date"
      FROM users
      ORDER BY created_at DESC
    `
    const result = await query(sql)
    res.json({ success: true, count: result.rowCount, data: result.rows })
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message })
  }
})

export default router

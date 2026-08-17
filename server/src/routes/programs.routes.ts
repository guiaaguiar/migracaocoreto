import { Router, Request, Response } from 'express'
import { query } from '../db/pool.js'

const router = Router()

// GET /api/programs - Listar todos os programas (EITA, NITRO, Prêmio Inovação, Hacker Cidadão)
router.get('/', async (_req: Request, res: Response) => {
  try {
    const sql = `
      SELECT 
        p.id,
        p.code,
        p.name,
        p.edition,
        p.description,
        p.banner_url as "bannerUrl",
        p.regulations_url as "regulationsUrl",
        p.start_date as "startDate",
        p.end_date as "endDate",
        p.status,
        COUNT(i.id)::int as "inscriptionsCount"
      FROM programs p
      LEFT JOIN inscriptions i ON p.id = i.program_id
      GROUP BY p.id
      ORDER BY p.created_at ASC
    `
    const result = await query(sql)
    res.json({ success: true, count: result.rowCount, data: result.rows })
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message })
  }
})

// GET /api/programs/:code/inscriptions - Listar inscrições de um programa específico (ex: NITRO_2026, EITA_RECIFE_3)
router.get('/:code/inscriptions', async (req: Request, res: Response) => {
  try {
    const { code } = req.params
    const sql = `
      SELECT 
        i.id,
        i.title,
        i.track,
        i.status,
        i.score,
        i.form_data as "formData",
        TO_CHAR(i.submitted_at, 'DD/MM/YYYY HH24:MI') as "submittedAt",
        u.name as "userName",
        u.email as "userEmail",
        s.name as "startupName",
        s.category as "startupCategory"
      FROM inscriptions i
      JOIN programs p ON i.program_id = p.id
      LEFT JOIN users u ON i.user_id = u.id
      LEFT JOIN startups s ON i.startup_id = s.id
      WHERE p.code = $1 OR p.id::text = $1
      ORDER BY i.submitted_at DESC
    `
    const result = await query(sql, [code])
    res.json({ success: true, count: result.rowCount, data: result.rows })
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message })
  }
})

// POST /api/programs/inscriptions - Submeter uma nova inscrição
router.post('/inscriptions', async (req: Request, res: Response) => {
  try {
    const {
      programCode,
      programId,
      opportunityId,
      userId,
      startupId,
      organizationId,
      track,
      title,
      formData = {},
    } = req.body

    if (!title || (!programCode && !programId)) {
      return res.status(400).json({ success: false, message: 'Campos obrigatórios: title, programCode ou programId' })
    }

    let targetProgramId = programId
    if (!targetProgramId && programCode) {
      const progRes = await query('SELECT id FROM programs WHERE code = $1', [programCode])
      if (progRes.rows.length === 0) {
        return res.status(404).json({ success: false, message: `Programa '${programCode}' não encontrado` })
      }
      targetProgramId = progRes.rows[0].id
    }

    const sql = `
      INSERT INTO inscriptions (
        program_id, opportunity_id, user_id, startup_id, organization_id,
        track, title, form_data, status
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, 'INSCRITO')
      RETURNING *
    `
    const params = [
      targetProgramId,
      opportunityId || null,
      userId || null,
      startupId || null,
      organizationId || null,
      track || 'Geral',
      title,
      JSON.stringify(formData),
    ]

    const result = await query(sql, params)
    res.status(201).json({ success: true, data: result.rows[0] })
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message })
  }
})

export default router

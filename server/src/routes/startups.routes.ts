import { Router, Request, Response } from 'express'
import { query } from '../db/pool.js'

const router = Router()

// GET /api/startups - Listar todas as startups com suporte a filtros e busca
router.get('/', async (req: Request, res: Response) => {
  try {
    const { search, category, trl, status } = req.query

    let sql = `
      SELECT 
        s.id,
        s.name,
        s.category,
        s.logo_text as "logoText",
        s.logo_bg as "logoBg",
        s.logo_type as "logoType",
        s.trl,
        s.badge_type as "tipoBadge",
        s.tags,
        s.description as "descricao",
        s.pitch_summary as "pitchSummary",
        s.website as "site",
        s.email,
        s.responsible_name as "responsavel",
        s.city as "cidade",
        s.state,
        s.status,
        s.created_at as "createdAt",
        o.name as "organizationName"
      FROM startups s
      LEFT JOIN organizations o ON s.organization_id = o.id
      WHERE 1=1
    `
    const params: any[] = []

    if (search && typeof search === 'string') {
      params.push(`%${search}%`)
      sql += ` AND (s.name ILIKE $${params.length} OR s.description ILIKE $${params.length} OR $${params.length} = ANY(s.tags))`
    }

    if (category && typeof category === 'string' && category !== 'Todas') {
      params.push(category)
      sql += ` AND s.category = $${params.length}`
    }

    if (trl && typeof trl === 'string' && trl !== 'Todos') {
      params.push(`%${trl}%`)
      sql += ` AND s.trl ILIKE $${params.length}`
    }

    if (status && typeof status === 'string') {
      params.push(status)
      sql += ` AND s.status = $${params.length}`
    }

    sql += ` ORDER BY s.created_at DESC`

    const result = await query(sql, params)
    res.json({
      success: true,
      count: result.rowCount,
      data: result.rows,
    })
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message })
  }
})

// GET /api/startups/:id - Detalhes de uma startup específica
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const sql = `
      SELECT 
        s.id,
        s.name,
        s.category,
        s.logo_text as "logoText",
        s.logo_bg as "logoBg",
        s.logo_type as "logoType",
        s.trl,
        s.badge_type as "tipoBadge",
        s.tags,
        s.description as "descricao",
        s.pitch_summary as "pitchSummary",
        s.website as "site",
        s.email,
        s.responsible_name as "responsavel",
        s.city as "cidade",
        s.state,
        s.status,
        s.created_at as "createdAt",
        o.id as "organizationId",
        o.name as "organizationName"
      FROM startups s
      LEFT JOIN organizations o ON s.organization_id = o.id
      WHERE s.id = $1
    `
    const result = await query(sql, [id])
    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Startup não encontrada' })
    }
    res.json({ success: true, data: result.rows[0] })
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message })
  }
})

// POST /api/startups - Criar nova startup
router.post('/', async (req: Request, res: Response) => {
  try {
    const {
      name,
      category,
      organizationId,
      logoText,
      logoBg,
      logoType = 'coreto',
      trl,
      badgeType = 'Startup',
      tags = [],
      description,
      pitchSummary,
      website,
      email,
      responsibleName,
      city = 'Recife',
      state = 'PE',
    } = req.body

    if (!name || !category || !description) {
      return res.status(400).json({ success: false, message: 'Campos obrigatórios: name, category, description' })
    }

    const sql = `
      INSERT INTO startups (
        name, category, organization_id, logo_text, logo_bg, logo_type,
        trl, badge_type, tags, description, pitch_summary, website, email,
        responsible_name, city, state
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)
      RETURNING *
    `
    const params = [
      name, category, organizationId || null, logoText, logoBg, logoType,
      trl, badgeType, tags, description, pitchSummary, website, email,
      responsibleName, city, state
    ]

    const result = await query(sql, params)
    res.status(201).json({ success: true, data: result.rows[0] })
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message })
  }
})

export default router

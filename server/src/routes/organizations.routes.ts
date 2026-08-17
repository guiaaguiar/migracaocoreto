import { Router, Request, Response } from 'express'
import { query } from '../db/pool.js'

const router = Router()

// GET /api/organizations - Listar organizações do ecossistema
router.get('/', async (req: Request, res: Response) => {
  try {
    const { search, segment } = req.query

    let sql = `
      SELECT 
        o.id,
        o.name,
        o.trade_name as "tradeName",
        o.cnpj,
        o.segment,
        o.size,
        o.website,
        o.email,
        o.phone,
        o.city,
        o.state,
        o.logo_url as "logoUrl",
        o.logo_text as "logoText",
        o.logo_bg as "logoBg",
        o.description,
        o.tags,
        COUNT(s.id)::int as "startupsCount"
      FROM organizations o
      LEFT JOIN startups s ON o.id = s.organization_id
      WHERE 1=1
    `
    const params: any[] = []

    if (search && typeof search === 'string') {
      params.push(`%${search}%`)
      sql += ` AND (o.name ILIKE $${params.length} OR o.description ILIKE $${params.length})`
    }

    if (segment && typeof segment === 'string') {
      params.push(segment)
      sql += ` AND o.segment = $${params.length}`
    }

    sql += ` GROUP BY o.id ORDER BY o.name ASC`

    const result = await query(sql, params)
    res.json({ success: true, count: result.rowCount, data: result.rows })
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message })
  }
})

// POST /api/organizations - Criar nova organização
router.post('/', async (req: Request, res: Response) => {
  try {
    const {
      name,
      tradeName,
      cnpj,
      segment,
      size = 'media',
      website,
      email,
      phone,
      address,
      city = 'Recife',
      state = 'PE',
      logoUrl,
      logoText,
      logoBg,
      description,
      tags = [],
    } = req.body

    if (!name) {
      return res.status(400).json({ success: false, message: 'Campo obrigatório: name' })
    }

    const sql = `
      INSERT INTO organizations (
        name, trade_name, cnpj, segment, size, website, email, phone,
        address, city, state, logo_url, logo_text, logo_bg, description, tags
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)
      RETURNING *
    `
    const params = [
      name, tradeName, cnpj, segment, size, website, email, phone,
      address, city, state, logoUrl, logoText, logoBg, description, tags
    ]

    const result = await query(sql, params)
    res.status(201).json({ success: true, data: result.rows[0] })
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message })
  }
})

export default router

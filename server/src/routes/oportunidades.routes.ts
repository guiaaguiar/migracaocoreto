import { Router, Request, Response } from 'express'
import { query } from '../db/pool.js'

const router = Router()

// GET /api/oportunidades - Listar todas as oportunidades e desafios com filtros
router.get('/', async (req: Request, res: Response) => {
  try {
    const { search, area, apoio, status } = req.query

    let sql = `
      SELECT 
        o.id,
        o.title as "titulo",
        o.organization_name as "organizacao",
        o.logo_text as "logoText",
        o.logo_bg as "logoBg",
        TO_CHAR(o.deadline, 'DD/MM/YYYY') as "dataLimite",
        o.deadline,
        o.budget_amount as "valor",
        o.budget_value as "valorNumerico",
        o.areas,
        o.support_types as "apoio",
        o.description as "descricao",
        o.requirements as "requisitos",
        o.benefits as "beneficios",
        o.status,
        o.created_at as "createdAt"
      FROM opportunities o
      WHERE 1=1
    `
    const params: any[] = []

    if (search && typeof search === 'string') {
      params.push(`%${search}%`)
      sql += ` AND (o.title ILIKE $${params.length} OR o.description ILIKE $${params.length} OR o.organization_name ILIKE $${params.length})`
    }

    if (area && typeof area === 'string' && area !== 'Todas as áreas') {
      params.push(area)
      sql += ` AND $${params.length} = ANY(o.areas)`
    }

    if (apoio && typeof apoio === 'string' && apoio !== 'Todos os tipos') {
      params.push(apoio)
      sql += ` AND $${params.length} = ANY(o.support_types)`
    }

    if (status && typeof status === 'string') {
      params.push(status)
      sql += ` AND o.status = $${params.length}`
    }

    sql += ` ORDER BY o.deadline ASC, o.created_at DESC`

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

// GET /api/oportunidades/:id - Obter detalhes de um desafio / oportunidade
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const sql = `
      SELECT 
        o.id,
        o.title as "titulo",
        o.organization_id as "organizationId",
        o.organization_name as "organizacao",
        o.logo_text as "logoText",
        o.logo_bg as "logoBg",
        TO_CHAR(o.deadline, 'DD/MM/YYYY') as "dataLimite",
        o.deadline,
        o.budget_amount as "valor",
        o.budget_value as "valorNumerico",
        o.areas,
        o.support_types as "apoio",
        o.description as "descricao",
        o.requirements as "requisitos",
        o.benefits as "beneficios",
        o.status,
        o.created_at as "createdAt"
      FROM opportunities o
      WHERE o.id = $1
    `
    const result = await query(sql, [id])
    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Oportunidade não encontrada' })
    }
    res.json({ success: true, data: result.rows[0] })
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message })
  }
})

// POST /api/oportunidades - Criar nova oportunidade / desafio
router.post('/', async (req: Request, res: Response) => {
  try {
    const {
      titulo,
      organizationId,
      organizacao,
      logoText,
      logoBg,
      dataLimite,
      valor,
      valorNumerico,
      areas = [],
      apoio = [],
      descricao,
      requisitos = [],
      beneficios = [],
      status = 'Inscrições Abertas',
    } = req.body

    if (!titulo || !organizacao || !dataLimite || !descricao) {
      return res.status(400).json({
        success: false,
        message: 'Campos obrigatórios: titulo, organizacao, dataLimite (YYYY-MM-DD), descricao',
      })
    }

    const sql = `
      INSERT INTO opportunities (
        title, organization_id, organization_name, logo_text, logo_bg,
        deadline, budget_amount, budget_value, areas, support_types,
        description, requirements, benefits, status
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
      RETURNING *
    `
    const params = [
      titulo, organizationId || null, organizacao, logoText, logoBg,
      dataLimite, valor, valorNumerico || null, areas, apoio,
      descricao, requisitos, beneficios, status
    ]

    const result = await query(sql, params)
    res.status(201).json({ success: true, data: result.rows[0] })
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message })
  }
})

export default router

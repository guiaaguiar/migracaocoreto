import { Router, Request, Response } from 'express'
import { query } from '../db/pool.js'

const router = Router()

// GET /api/ecossistema/actors - Listar atores do mapa com suporte a filtros de categoria e bairro
router.get('/actors', async (req: Request, res: Response) => {
  try {
    const { category, neighborhood, search } = req.query

    let sql = `
      SELECT 
        id,
        name,
        category_id as "categoryId",
        category_name as "categoryName",
        trl,
        neighborhood,
        map_x as "x",
        map_y as "y",
        description,
        website,
        email,
        color,
        connections,
        created_at as "createdAt"
      FROM ecosystem_actors
      WHERE 1=1
    `
    const params: any[] = []

    if (category && typeof category === 'string' && category !== 'all') {
      params.push(category)
      sql += ` AND category_id = $${params.length}`
    }

    if (neighborhood && typeof neighborhood === 'string' && neighborhood !== 'all') {
      params.push(neighborhood)
      sql += ` AND neighborhood = $${params.length}`
    }

    if (search && typeof search === 'string') {
      params.push(`%${search}%`)
      sql += ` AND (name ILIKE $${params.length} OR description ILIKE $${params.length})`
    }

    sql += ` ORDER BY name ASC`

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

// GET /api/ecossistema/stats - Contagem agrupada por categoria
router.get('/stats', async (_req: Request, res: Response) => {
  try {
    const sql = `
      SELECT 
        category_id as "categoryId",
        category_name as "categoryName",
        COUNT(*)::int as count
      FROM ecosystem_actors
      GROUP BY category_id, category_name
      ORDER BY count DESC
    `
    const result = await query(sql)
    res.json({ success: true, data: result.rows })
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message })
  }
})

export default router

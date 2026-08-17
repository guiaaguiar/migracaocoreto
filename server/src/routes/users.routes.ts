import { Router, Request, Response } from 'express'
import { query } from '../db/pool.js'

const router = Router()

// GET /api/users - Listar usuários com filtros por role e status
router.get('/', async (req: Request, res: Response) => {
  try {
    const { role, status, search } = req.query

    let sql = `
      SELECT 
        id,
        keycloak_id as "keycloakId",
        name,
        email,
        role,
        status,
        avatar_url as "avatarUrl",
        bio,
        phone,
        linkedin,
        github,
        skills,
        tags,
        created_at as "createdAt"
      FROM users
      WHERE 1=1
    `
    const params: any[] = []

    if (role && typeof role === 'string') {
      params.push(role)
      sql += ` AND role = $${params.length}`
    }

    if (status && typeof status === 'string') {
      params.push(status)
      sql += ` AND status = $${params.length}`
    }

    if (search && typeof search === 'string') {
      params.push(`%${search}%`)
      sql += ` AND (name ILIKE $${params.length} OR email ILIKE $${params.length})`
    }

    sql += ` ORDER BY created_at DESC`

    const result = await query(sql, params)
    res.json({ success: true, count: result.rowCount, data: result.rows })
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message })
  }
})

// POST /api/users - Criar ou atualizar perfil de usuário / talento / resolvedor
router.post('/', async (req: Request, res: Response) => {
  try {
    const {
      keycloakId,
      name,
      email,
      role = 'TALENTO',
      status = 'completo',
      avatarUrl,
      bio,
      phone,
      linkedin,
      github,
      skills = [],
      tags = [],
    } = req.body

    if (!name || !email) {
      return res.status(400).json({ success: false, message: 'Campos obrigatórios: name, email' })
    }

    const sql = `
      INSERT INTO users (
        keycloak_id, name, email, role, status, avatar_url, bio,
        phone, linkedin, github, skills, tags
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
      ON CONFLICT (email) DO UPDATE SET
        name = EXCLUDED.name,
        role = EXCLUDED.role,
        status = EXCLUDED.status,
        avatar_url = COALESCE(EXCLUDED.avatar_url, users.avatar_url),
        bio = COALESCE(EXCLUDED.bio, users.bio),
        phone = COALESCE(EXCLUDED.phone, users.phone),
        linkedin = COALESCE(EXCLUDED.linkedin, users.linkedin),
        github = COALESCE(EXCLUDED.github, users.github),
        skills = EXCLUDED.skills,
        tags = EXCLUDED.tags,
        updated_at = CURRENT_TIMESTAMP
      RETURNING *
    `
    const params = [
      keycloakId || null, name, email, role, status, avatarUrl || null,
      bio || null, phone || null, linkedin || null, github || null,
      skills, tags
    ]

    const result = await query(sql, params)
    res.status(201).json({ success: true, data: result.rows[0] })
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message })
  }
})

export default router

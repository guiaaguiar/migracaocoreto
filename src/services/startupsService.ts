import { apiFetch } from './api'

export interface StartupItem {
  id: string
  name: string
  category: string
  logoText?: string
  logoBg?: string
  logoType?: 'custom' | 'text' | 'coreto'
  trl?: string
  tipoBadge?: string
  tags: string[]
  descricao: string
  pitchSummary?: string
  site?: string
  email?: string
  responsavel?: string
  cidade?: string
  state?: string
  status?: string
}

export interface StartupFilters {
  search?: string
  category?: string
  trl?: string
  status?: string
}

export const startupsService = {
  async getAll(filters: StartupFilters = {}): Promise<StartupItem[]> {
    const params = new URLSearchParams()
    if (filters.search) params.append('search', filters.search)
    if (filters.category) params.append('category', filters.category)
    if (filters.trl) params.append('trl', filters.trl)
    if (filters.status) params.append('status', filters.status)

    const query = params.toString() ? `?${params.toString()}` : ''
    return apiFetch<StartupItem[]>(`/startups${query}`)
  },

  async getById(id: string): Promise<StartupItem> {
    return apiFetch<StartupItem>(`/startups/${id}`)
  },

  async create(data: Partial<StartupItem>): Promise<StartupItem> {
    return apiFetch<StartupItem>('/startups', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  },
}

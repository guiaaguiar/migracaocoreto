import { apiFetch } from './api'

export interface OportunidadeItem {
  id: string
  titulo: string
  organizacao: string
  logoText?: string
  logoBg?: string
  dataLimite: string
  deadline?: string
  valor: string
  valorNumerico?: number
  areas: string[]
  apoio: string[]
  descricao: string
  requisitos?: string[]
  beneficios?: string[]
  status?: string
}

export interface OportunidadeFilters {
  search?: string
  area?: string
  apoio?: string
  status?: string
}

export const oportunidadesService = {
  async getAll(filters: OportunidadeFilters = {}): Promise<OportunidadeItem[]> {
    const params = new URLSearchParams()
    if (filters.search) params.append('search', filters.search)
    if (filters.area) params.append('area', filters.area)
    if (filters.apoio) params.append('apoio', filters.apoio)
    if (filters.status) params.append('status', filters.status)

    const query = params.toString() ? `?${params.toString()}` : ''
    return apiFetch<OportunidadeItem[]>(`/oportunidades${query}`)
  },

  async getById(id: string): Promise<OportunidadeItem> {
    return apiFetch<OportunidadeItem>(`/oportunidades/${id}`)
  },

  async create(data: Partial<OportunidadeItem>): Promise<OportunidadeItem> {
    return apiFetch<OportunidadeItem>('/oportunidades', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  },
}

import { apiFetch } from './api'

export type CategoryId = 'startups' | 'icts' | 'hubs' | 'governo' | 'investidores' | 'aceleradoras' | 'fomento'

export interface EcosystemActorItem {
  id: string
  name: string
  categoryId: CategoryId
  categoryName: string
  trl: number
  neighborhood: string
  x: number // percentage on SVG map
  y: number // percentage on SVG map
  description: string
  website: string
  email: string
  connections: string[]
  color: string
}

export interface CategoryStat {
  categoryId: CategoryId
  categoryName: string
  count: number
}

export const ecossistemaService = {
  async getActors(params: { category?: string; neighborhood?: string; search?: string } = {}): Promise<EcosystemActorItem[]> {
    const urlParams = new URLSearchParams()
    if (params.category) urlParams.append('category', params.category)
    if (params.neighborhood) urlParams.append('neighborhood', params.neighborhood)
    if (params.search) urlParams.append('search', params.search)

    const query = urlParams.toString() ? `?${urlParams.toString()}` : ''
    return apiFetch<EcosystemActorItem[]>(`/ecossistema/actors${query}`)
  },

  async getStats(): Promise<CategoryStat[]> {
    return apiFetch<CategoryStat[]>('/ecossistema/stats')
  },
}

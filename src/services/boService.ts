import { apiFetch } from './api'

export interface BoStats {
  totalOrganizations: number
  totalStartups: number
  totalUsers: number
  completeUsers: number
  activeOpportunities: number
  totalInscriptions: number
}

export interface BoInitiative {
  id: string
  title: string
  status: string
  date: string
  link: string
  organizationName?: string
}

export interface BoUser {
  id: string
  name: string
  email: string
  role: string
  status: 'completo' | 'incompleto'
  tags?: string[]
  date?: string
}

export interface BoOrganization {
  id: string
  name: string
  tags?: string[]
}

export const boService = {
  async getStats(): Promise<BoStats> {
    return apiFetch<BoStats>('/bo/stats')
  },

  async getInitiatives(): Promise<BoInitiative[]> {
    return apiFetch<BoInitiative[]>('/bo/initiatives')
  },

  async getUsers(): Promise<BoUser[]> {
    return apiFetch<BoUser[]>('/bo/users')
  },

  async getOrganizations(): Promise<BoOrganization[]> {
    return apiFetch<BoOrganization[]>('/organizations')
  },
}

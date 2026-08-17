import { apiFetch } from './api'

export interface ProgramItem {
  id: string
  code: string
  name: string
  edition?: string
  description?: string
  bannerUrl?: string
  regulationsUrl?: string
  startDate?: string
  endDate?: string
  status: string
  inscriptionsCount?: number
}

export interface InscriptionItem {
  id: string
  title: string
  track?: string
  status: string
  score?: number
  formData: Record<string, any>
  submittedAt: string
  userName?: string
  userEmail?: string
  startupName?: string
  startupCategory?: string
}

export const programsService = {
  async getAll(): Promise<ProgramItem[]> {
    return apiFetch<ProgramItem[]>('/programs')
  },

  async getInscriptions(programCode: string): Promise<InscriptionItem[]> {
    return apiFetch<InscriptionItem[]>(`/programs/${programCode}/inscriptions`)
  },

  async submitInscription(data: {
    programCode?: string
    programId?: string
    opportunityId?: string
    userId?: string
    startupId?: string
    track?: string
    title: string
    formData?: Record<string, any>
  }): Promise<any> {
    return apiFetch('/programs/inscriptions', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  },
}

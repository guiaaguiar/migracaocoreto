/**
 * Cliente HTTP Base para consumo da API PostgreSQL CORETO
 */

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api'

export interface ApiResponse<T> {
  success: boolean
  data: T
  count?: number
  message?: string
  error?: string
}

export async function apiFetch<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const url = `${API_BASE_URL}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`
  
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...(options.headers || {}),
  }

  try {
    const response = await fetch(url, {
      ...options,
      headers,
    })

    const json = await response.json()

    if (!response.ok) {
      throw new Error(json.message || json.error || `Erro HTTP ${response.status}`)
    }

    return json.data !== undefined ? json.data : json
  } catch (error) {
    console.error(`[API Error] Requisição para ${url} falhou:`, error)
    throw error
  }
}

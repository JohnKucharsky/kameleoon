export interface Site {
  id: number
  url: string
}

export const Type = {
  CLASSIC: 'CLASSIC',
  SERVER_SIDE: 'SERVER_SIDE',
  MVT: 'MVT',
} as const

export const Status = {
  DRAFT: 'DRAFT',
  ONLINE: 'ONLINE',
  PAUSED: 'PAUSED',
  STOPPED: 'STOPPED',
} as const

export interface Test {
  id: number
  name: string
  type: keyof typeof Type
  status: keyof typeof Status
  siteId: number
}

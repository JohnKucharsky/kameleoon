import { useEffect, useState } from 'react'
import axios from 'axios'
import { API_URL, ENDPOINTS } from '../../url.ts'
import { Site } from '@/@types/types.ts'

export default function useGetSites(): [Site[]] {
  const [sites, setSites] = useState<Site[]>([])

  useEffect(() => {
    const fetcher = async () => {
      const res = await axios.get<Site[]>(API_URL + ENDPOINTS['/sites'])
      setSites(res.data)
    }
    fetcher().catch(console.error)
  }, [])

  return [sites]
}

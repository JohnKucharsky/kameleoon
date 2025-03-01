import { useEffect, useState } from 'react'
import axios from 'axios'
import { API_URL, ENDPOINTS } from '../../url.ts'
import { Test } from '@/@types/types.ts'

export default function useGetTests(id?: string): [Test[] | null, boolean] {
  const [tests, setTests] = useState<Test[] | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetcher = async () => {
      setLoading(true)

      try {
        if (id) {
          const res = await axios.get<Test>(
            `${API_URL + ENDPOINTS['/tests']}/${id}`,
          )
          setTests([res.data])
        } else {
          const res = await axios.get<Test[]>(API_URL + ENDPOINTS['/tests'])
          setTests(res.data)
        }
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    fetcher()
  }, [id])

  return [tests, loading]
}

import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import axios from 'axios'
import { API_URL, ENDPOINTS } from '../../url.ts'
import { Test } from '@/@types/types.ts'

export default function useGetTests(): [
  Test[],
  Dispatch<SetStateAction<Test[]>>,
] {
  const [tests, setTests] = useState<Test[]>([])
  useEffect(() => {
    const fetcher = async () => {
      const res = await axios.get<Test[]>(API_URL + ENDPOINTS['/tests'])
      setTests(res.data)
    }
    fetcher().catch(console.error)
  }, [])

  return [tests, setTests]
}

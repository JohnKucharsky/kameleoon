import { useMemo, useState } from 'react'
import { Test } from '@/@types/types.ts'

export default function useSearch(tests: Test[] | null) {
  const [query, setQuery] = useState('')

  const filteredTests = useMemo(() => {
    return (
      tests?.filter((test) =>
        test.name.toLowerCase().includes(query.toLowerCase()),
      ) || null
    )
  }, [tests, query])

  return { query, setQuery, filteredTests }
}

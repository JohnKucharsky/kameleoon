import { Dispatch, SetStateAction, useCallback, useMemo } from 'react'
import { Site, Test } from '@/@types/types.ts'
import NoResults from '@/components/NoResults.tsx'
import SearchInput from '@/components/SearchInput.tsx'
import useAlphabeticalSort from '@/hooks/useAlphabeticalSort.tsx'
import useGetSites from '@/hooks/useGetSites.tsx'
import useGetTests from '@/hooks/useGetTests.tsx'
import useSearch from '@/hooks/useSearch.tsx'
import TableHead from '@/TableHead.tsx'
import TableRow from '@/TableRow.tsx'
import { keyBy } from '@/utils.ts'

export default function Dashboard() {
  const [tests, loading] = useGetTests()
  const [sites] = useGetSites()
  const sitesObj = useMemo(() => keyBy(sites, 'id'), [sites])
  const { query, setQuery, filteredTests } = useSearch(tests)
  const { sortedTests, sortConfig, setSortConfig } = useAlphabeticalSort({
    sitesObj,
    tests: filteredTests,
  })

  const handleSort = useCallback(
    (key: keyof Test) => {
      setSortConfig((prev) => {
        if (prev?.key === key) {
          return { key, direction: prev.direction === 'asc' ? 'desc' : 'asc' }
        }
        return { key, direction: 'asc' }
      })
    },
    [setSortConfig],
  )

  return (
    <div>
      <div className={'top-spacing-wrapper'}>
        <h2 className="main-title" style={{ marginBottom: '44px' }}>
          Dashboard
        </h2>
        <SearchInput
          testsQty={sortedTests.length}
          query={query}
          setQuery={setQuery}
        />
      </div>
      <div className="table-container">
        <TableEl
          sortConfig={sortConfig}
          handleSort={handleSort}
          sortedTests={sortedTests}
          sitesObj={sitesObj}
          loading={loading}
          setQuery={setQuery}
        />
      </div>
    </div>
  )
}

const TableEl = ({
  sortConfig,
  handleSort,
  sortedTests,
  sitesObj,
  loading,
  setQuery,
}: {
  sortConfig: {
    key: keyof Test | null
    direction: 'asc' | 'desc'
  } | null
  handleSort: (key: keyof Test) => void
  sortedTests: Test[]
  sitesObj: Record<string | number, Site>
  loading: boolean
  setQuery: Dispatch<SetStateAction<string>>
}) => {
  if (loading) {
    return <div>Loading...</div>
  }

  if (sortedTests.length === 0) {
    return <NoResults setQuery={setQuery} />
  }

  return (
    <>
      <table>
        <thead>
          <TableHead sortConfig={sortConfig} handleSort={handleSort} />
        </thead>
        <tbody>
          {sortedTests.map((row, index) => (
            <TableRow test={row} key={index} sitesObj={sitesObj} />
          ))}
        </tbody>
      </table>
    </>
  )
}

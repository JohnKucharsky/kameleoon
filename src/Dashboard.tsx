import { Test } from '@/@types/types.ts'
import SortableCell from '@/components/SortableCell.tsx'
import useAlphabeticalSort from '@/hooks/useAlphabeticalSort.tsx'
import useGetSites from '@/hooks/useGetSites.tsx'
import useGetTests from '@/hooks/useGetTests.tsx'
import { cleanUrl, keyBy } from '@/utils.ts'

export default function Dashboard() {
  const [tests] = useGetTests()
  const [sites] = useGetSites()
  const sitesObj = keyBy(sites, 'id')
  const { sortedTests, sortConfig, setSortConfig } = useAlphabeticalSort({
    sitesObj,
    tests,
  })

  const handleSort = (key: keyof Test) => {
    setSortConfig((prev) => {
      if (prev?.key === key) {
        return { key, direction: prev.direction === 'asc' ? 'desc' : 'asc' }
      }
      return { key, direction: 'asc' }
    })
  }

  return (
    <div>
      <h2 className="main-title" style={{ marginBottom: '2rem' }}>
        Dashboard
      </h2>
      <input
        type="text"
        className="input"
        placeholder="What test are you looking for?"
      />
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <SortableCell
                sortOrder={sortConfig?.direction || null}
                handleSort={() => handleSort('name')}
                showArrow={sortConfig?.key === 'name'}
              >
                <h5 className="table-head-text">Name</h5>
              </SortableCell>
              <SortableCell
                sortOrder={sortConfig?.direction || null}
                handleSort={() => handleSort('type')}
                showArrow={sortConfig?.key === 'type'}
              >
                <h5 className="table-head-text">Type</h5>
              </SortableCell>
              <SortableCell
                sortOrder={sortConfig?.direction || null}
                handleSort={() => handleSort('status')}
                showArrow={sortConfig?.key === 'status'}
              >
                <h5 className="table-head-text">Status</h5>
              </SortableCell>
              <SortableCell
                sortOrder={sortConfig?.direction || null}
                handleSort={() => handleSort('siteId')}
                showArrow={sortConfig?.key === 'siteId'}
              >
                <h5 className="table-head-text">Site</h5>
              </SortableCell>
              <th>
                <h5 className="table-head-text">Action</h5>
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedTests.map((row, index) => (
              <tr key={index} className="pb" style={{ height: '20px' }}>
                <td>
                  <h6 className="table-bold-text">{row.name}</h6>
                </td>
                <td>
                  <p className="table-normal-text">{row.type}</p>
                </td>
                <td className={row.status.toLowerCase()}>
                  <p className="table-normal-text">{row.status}</p>
                </td>
                <td>
                  <p className="table-normal-text">
                    {cleanUrl(sitesObj[row.siteId]?.url)}
                  </p>
                </td>
                <td>
                  <button
                    className={row.status === 'DRAFT' ? 'finalize' : 'results'}
                  >
                    <div className="table-normal-text">
                      {row.status === 'DRAFT' ? 'finalize' : 'results'}
                    </div>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

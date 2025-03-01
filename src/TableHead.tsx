import { memo } from 'react'
import { Test } from '@/@types/types.ts'
import SortableCell from '@/components/SortableCell.tsx'

export default memo(TableHead)
function TableHead({
  sortConfig,
  handleSort,
}: {
  sortConfig: {
    key: keyof Test | null
    direction: 'asc' | 'desc'
  } | null
  handleSort: (key: keyof Test) => void
}) {
  return (
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
    </tr>
  )
}

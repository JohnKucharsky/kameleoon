import { PropsWithChildren } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function SortableCell({
  sortOrder,
  handleSort,
  showArrow,
  children,
}: PropsWithChildren<{
  sortOrder: 'asc' | 'desc' | null
  handleSort: () => void
  showArrow: boolean
}>) {
  return (
    <th onClick={() => handleSort()} style={{ cursor: 'pointer' }}>
      <div className={'row-center'}>
        {children}
        {showArrow && sortOrder === 'asc' && <ChevronUp size={'1rem'} />}
        {showArrow && sortOrder === 'desc' && <ChevronDown size={'1rem'} />}
      </div>
    </th>
  )
}

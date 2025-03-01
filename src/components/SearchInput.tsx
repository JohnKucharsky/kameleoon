import { Dispatch, SetStateAction } from 'react'
import { Search } from 'lucide-react'

export default function SearchInput({
  testsQty,
  query,
  setQuery,
}: {
  testsQty: number
  query: string
  setQuery: Dispatch<SetStateAction<string>>
}) {
  return (
    <div className="search-input">
      <Search className="search-icon" width={13} height={14} />
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        className="input"
        placeholder="What test are you looking for?"
      />
      <span className="input-text">{testsQty} tests</span>
    </div>
  )
}

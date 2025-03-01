import { Dispatch, SetStateAction } from 'react'

export default function NoResults({
  setQuery,
}: {
  setQuery: Dispatch<SetStateAction<string>>
}) {
  return (
    <div className={'no-results-wrapper'}>
      <h4>Your search did not match any results.</h4>
      <button onClick={() => setQuery('')} className={'base-button results'}>
        Reset
      </button>
    </div>
  )
}

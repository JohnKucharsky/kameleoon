import { Fragment } from 'react'
import { Test } from '@/@types/types.ts'

export default function DisplayTests({
  tests,
  loading,
}: {
  tests: Test[] | null
  loading: boolean
}) {
  if (loading) {
    return <p>Loading...</p>
  }

  if (tests && tests.length > 0) {
    return (
      <div>
        {tests.map((test, index) => (
          <Fragment key={index}>
            {Object.entries(test).map(([key, value]) => (
              <p key={`${index}-${key}`}>{`${key}: ${value}`}</p>
            ))}
          </Fragment>
        ))}
      </div>
    )
  }

  return <p>No tests found</p>
}

import { Fragment } from 'react'
import { useParams } from 'react-router'
import useGetTests from '@/hooks/useGetTests.tsx'

export default function Finalize() {
  const params = useParams()
  const [tests, loading] = useGetTests(params.testId)

  return (
    <div>
      <h2 className="main-title" style={{ marginBottom: '2rem' }}>
        Finalize
      </h2>
      <h3 className="secondary-title">Spring promotion</h3>
      {loading ? (
        'Loading...'
      ) : (tests?.length || 0) > 0 ? (
        <div>
          {tests?.map((test) => (
            <Fragment>
              {Object.entries(test).map(([key, value]) => (
                <p key={test.id + key}>{`${key}: ${value}`}</p>
              ))}
            </Fragment>
          ))}
        </div>
      ) : (
        <p>No tests found</p>
      )}
    </div>
  )
}

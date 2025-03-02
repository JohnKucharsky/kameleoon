import { useParams } from 'react-router'
import BackHome from '@/components/BackHome.tsx'
import DisplayTests from '@/components/DisplayTests.tsx'
import useGetTests from '@/hooks/useGetTests.tsx'

export default function Results() {
  const params = useParams()
  const [tests, loading] = useGetTests(params.testId)

  return (
    <div className={'detailed-wrapper'}>
      <h2 className={'main-title'} style={{ marginBottom: '8px' }}>
        Results
      </h2>
      <h3 className={'secondary-title'}>Order basket redesign</h3>
      <DisplayTests tests={tests} loading={loading} />
      <BackHome />
    </div>
  )
}

import { ChevronLeft } from 'lucide-react'
import { Link } from 'react-router'

export default function BackHome() {
  return (
    <Link to={'/'} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className={'flex-center-2 back-button'}>
        <ChevronLeft />
        <h4 className={'back-link'}>Back</h4>
      </div>
    </Link>
  )
}

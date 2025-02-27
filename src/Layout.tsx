import { Outlet } from 'react-router'

export default function Layout() {
  return (
    <div style={{ padding: '3rem' }}>
      <Outlet />
    </div>
  )
}

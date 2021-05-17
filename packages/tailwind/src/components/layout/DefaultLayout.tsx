import { FC } from 'react'
import { Outlet } from 'react-router-dom'

const DefaultLayout: FC = () => (
  <main>
    <Outlet />
  </main>
)

export { DefaultLayout }

import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { PageLayout } from '../components/layout/PageLayout'
import { Home } from '../pages/Home'

const Router: FC = () => (
  <Routes>
    <Route path={''} element={<PageLayout />}>
      <Route path={'/'} element={<Home />} />
    </Route>
  </Routes>
)

export { Router }

import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import './DefaultLayout.less'

const DefaultLayout: FC = () => (
  <main>
    <header>
      <section className={'header'}>App</section>
    </header>
    <article>
      <Outlet />
    </article>
  </main>
)

export { DefaultLayout }

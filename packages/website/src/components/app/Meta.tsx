import { FC, createContext } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { MetaComponent } from '../../graphql'

const helmetContext = createContext({ title: 'React App & AntDesign' })

function withHelmet(Wrapped: typeof Helmet): FC {
  return ({ children }) => (
    <HelmetProvider context={helmetContext}>
      <MetaComponent variables={{ slug: window.location.pathname }}>
        {({ data, loading }) =>
          !loading && data?.meta?.title ? (
            <Wrapped>
              <title>{data.meta?.title}</title>
            </Wrapped>
          ) : null
        }
      </MetaComponent>
      {children}
    </HelmetProvider>
  )
}

export default withHelmet(Helmet)

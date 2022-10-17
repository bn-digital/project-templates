import { createContext, FC, PropsWithChildren, useContext } from 'react'
import { useLocalStorage } from 'react-use'

import { MeComponent } from '../../graphql'

type ContextProps = Maybe<Partial<UsersPermissionsMe>>

const defaultValue: ContextProps = null

const AuthContext = createContext<ContextProps>(defaultValue)

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [token] = useLocalStorage('jwtToken')
  return !token ? <>{children}</> : <MeComponent>{({ data }) => <AuthContext.Provider value={data?.me}>{children}</AuthContext.Provider>}</MeComponent>
}

function withAuth(Wrapped: FC): FC {
  return props => (
    <AuthProvider>
      <Wrapped {...props} />
    </AuthProvider>
  )
}

const useAuth = () => useContext<ContextProps>(AuthContext)

export { AuthProvider, useAuth, withAuth }

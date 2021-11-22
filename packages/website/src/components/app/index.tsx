import ApiProvider from './Api'
import ViewProvider from './View'
import { FC } from 'react'
export { ViewProvider, ApiProvider }

const App: FC = ({ children }) => (
  <ApiProvider>
    <ViewProvider>{children}</ViewProvider>
  </ApiProvider>
)

export { App as default }

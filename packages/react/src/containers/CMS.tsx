import { FC, createContext, useContext } from 'react'
import { Loader } from './index'
import { ContentQuery,  useWebsiteQuery } from '../graphql'

const Content = createContext({})

const CMS: FC = ({ children }) => {
  const { data, loading } = useWebsiteQuery({ variables: { where: { domain: 'app' } } })
  return loading ? <Loader /> : <Content.Provider value={data?.websites ?? {}}>{children}</Content.Provider>
}

const useContent: () => ContentQuery = () => useContext(Content)

export { CMS, useContent }

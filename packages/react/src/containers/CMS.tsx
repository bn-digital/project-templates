import { FC, createContext, useContext } from 'react'
import { Loader } from './index'
import fallback from '../graphql/fallback.json'
import { ContentQuery, useContentQuery } from '../graphql'

const Content = createContext(undefined)

const CMS: FC = ({ children }) => {
  const { data, loading } = useContentQuery({ variables: { criteria: { slug: 'app' } } })
  return loading ? <Loader /> : <Content.Provider value={data ?? fallback.data}>{children}</Content.Provider>
}
const useContent: () => ContentQuery = () => useContext(Content)
export { CMS, useContent }

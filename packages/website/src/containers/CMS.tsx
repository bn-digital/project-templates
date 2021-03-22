import { FC, createContext, useContext } from 'react'
import { GetContentQuery, useGetContentQuery } from '../graphql'
import { Loader } from './index'
import fallback from '../graphql/fallback.json'

const Content = createContext<GetContentQuery>({ website: null })

const CMS: FC = ({ children }) => {
  const { data, loading } = useGetContentQuery()
  return loading ? (
    <Loader />
  ) : (
    <Content.Provider value={data ?? (fallback.data as GetContentQuery)}>{children}</Content.Provider>
  )
}
const useContent: () => GetContentQuery = () => useContext(Content)
export { CMS, useContent }

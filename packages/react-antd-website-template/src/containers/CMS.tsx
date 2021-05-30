import { FC, createContext, useContext } from 'react'
import { Loader } from './index'
import { ContentQuery, useWebsiteQuery } from '../graphql'

const Content = createContext({})

const CMS: FC = ({ children }) => {
  const domain = window.location.hostname
  const { data, loading } = useWebsiteQuery({ variables: { domain } })
  return loading ? (
    <Loader />
  ) : data?.website ? (
    <Content.Provider value={data.website}>{children}</Content.Provider>
  ) : (
    <>{children}</>
  )
}

const useContent: () => ContentQuery = () => useContext(Content)

export { CMS, useContent }

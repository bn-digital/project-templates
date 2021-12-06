import {usePageQuery} from '../../graphql'
import {createContext, FC, FunctionComponent, useCallback, useContext, useEffect, useState} from 'react'
import {RouteMatch, useLocation} from 'react-router-dom'
import {Path} from 'history'

export interface ContentProps {
  grid: Partial<{ [key in ContentGridType]: ComponentDataEntry[] }>
  text: Partial<{ [key in ContentTextType]: ComponentUiParagraph[] }>
  menu: Partial<{ [key in ContentMenuType]: ComponentUiLink[] }>
  section: Partial<{ [key in ContentSectionType]: ComponentUiCard[] }>
}

export type ContentComponent<T = ContentProps> = FC<ContentProps & T>

type ContentType = 'ComponentUiSection' | 'ComponentUiMenu' | 'ComponentUiText' | 'ComponentUiGrid'

type ContentComponentType = ComponentDataEntry | ComponentUiParagraph | ComponentUiLink | ComponentUiCard

type ComponentType = {
  id: string
  visible: boolean
  __typename: ContentType
  menuType: ContentMenuType
  sectionType: ContentSectionType
  gridType: ContentGridType
  textType: ContentTextType
  children: Array<ContentComponentType>
}

const defaultValue = {section: {}, menu: {}, text: {}, grid: {}}

const Content = createContext<ContentProps>(defaultValue)

function resolveContentType(component: ComponentType): [keyof ContentProps, string] {
  switch (component.__typename) {
    case 'ComponentUiSection':
      return ['section', component.sectionType]
    case 'ComponentUiMenu':
      return ['menu', component.menuType]
    case 'ComponentUiText':
      return ['text', component.textType]
    case 'ComponentUiGrid':
      return ['grid', component.gridType]
  }
}

function mapContent(data: ComponentType[]) {
  return data
    ?.filter(it => it.visible)
    .reduce((accumulator, component) => {
      const [type, key] = resolveContentType(component)
      return {...accumulator, [type]: {...accumulator[type], ...{[key]: component.children}}}
    }, defaultValue)
}

const ContentProvider: FC<Pick<RouteMatch, 'pathname'>> = ({pathname = '/', children}) => {
  const {data} = usePageQuery({variables: {pathname}})
  const getContent = useCallback(mapContent, [pathname])
  const [value, setValue] = useState(defaultValue)
  useEffect(() => {
    setValue(prevState => ({...prevState, ...getContent(data?.pages?.data[0].attributes?.content as ComponentType[])}))
  }, [data?.pages?.data, getContent])

  return <Content.Provider value={value}>{children}</Content.Provider>
}

function withContent(Wrapped: FC<ContentProps>, pathProvider: () => Pick<Path, 'pathname'> = useLocation): FunctionComponent {
  return props => (
    <ContentProvider pathname={pathProvider().pathname}>
      <Content.Consumer>{value => <Wrapped {...value} {...props} />}</Content.Consumer>
    </ContentProvider>
  )
}

const useContent = () => useContext(Content)

export {ContentProvider, withContent, useContent}
type SvgrComponent = React.FunctionComponent<React.SVGAttributes<SVGElement>>

declare module '*.svg' {
  const content: SvgrComponent
  export default content
}

declare module '*.jpg'

declare module '*.png'

declare module '*.less'

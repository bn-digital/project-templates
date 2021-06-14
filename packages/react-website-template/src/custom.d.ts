type SvgrComponent = React.FunctionComponent<React.SVGAttributes<SVGElement>>

declare module '*.svg' {
  const value: SvgrComponent
  export default value
}

declare module '*.jpg'

declare module '*.png'

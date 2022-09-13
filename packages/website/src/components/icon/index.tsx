import { FC, SVGProps } from 'react'

const icons: { [key: string]: FC<SVGProps<SVGSVGElement>> } = {} as const

type SvgIconProps = SVGProps<SVGSVGElement> & { type: string }

const SvgIcon: FC<SvgIconProps> = ({ type, ...svgProps }) => {
  const Icon = icons[type] ?? null
  return Icon && <Icon {...svgProps} />
}

export { SvgIcon }

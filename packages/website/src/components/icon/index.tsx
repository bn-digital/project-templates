import { FC, SVGProps } from 'react'
import { ReactComponent as AntDesign } from './images/AntDesign.svg'
import { ReactComponent as React } from './images/React.svg'
import { ReactComponent as Strapi } from './images/Strapi.svg'

const icons: { [key: string]: FC<SVGProps<SVGSVGElement>> } = {
  ant: AntDesign,
  react: React,
  strapi: Strapi,
} as const

type SvgIconProps = SVGProps<SVGSVGElement> & { type: string }

const SvgIcon: FC<SvgIconProps> = ({ type, ...svgProps }) => {
  const Icon = icons[type] ?? null
  return Icon && <Icon {...svgProps} />
}

export { SvgIcon }

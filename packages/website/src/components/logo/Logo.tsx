import { FC, Fragment, SVGProps } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as LogoImg } from './Logo.svg'

type LogoProps = { image: SVGProps<SVGSVGElement>; name: string }

const Logo: FC<Partial<LogoProps>> = ({ image }) => (
  <Fragment>
    <Link to={'/'}>
      <LogoImg {...image} />
    </Link>
  </Fragment>
)

export { Logo }

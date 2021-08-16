import { FC, Fragment, ImgHTMLAttributes } from 'react'
import { Link } from 'react-router-dom'

type LogoProps = { image: ImgHTMLAttributes<HTMLImageElement>; name: string }

const Logo: FC<Partial<LogoProps>> = ({ image }) => (
  <Fragment>
    <Link to={'/'}>
      <img height={32} style={{ marginTop: -4 }} alt={image?.title} {...image} />
    </Link>
  </Fragment>
)

export { Logo }

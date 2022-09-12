import { FC } from 'react'
import { useOutletContext } from 'react-router-dom'

import { HeroSection } from '../../components/section'

const Home: FC = () => {
  const props = useOutletContext<Maybe<HomeFragment>>()
  return <>{props?.hero && <HeroSection {...props.hero} />}</>
}

export { Home as default }

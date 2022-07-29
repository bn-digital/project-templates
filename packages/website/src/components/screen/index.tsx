import { useMediaQuery } from 'react-responsive'

enum Breakpoints {
  XS = 480,
  SM = 576,
  MD = 768,
  LG = 992,
  XL = 1200,
  XXL = 1600,
}

type SizeMap = Readonly<{ [key in keyof typeof Breakpoints]: Breakpoints }>

const sizes: SizeMap = {
  XS: Breakpoints.XS,
  SM: Breakpoints.SM,
  MD: Breakpoints.MD,
  LG: Breakpoints.LG,
  XL: Breakpoints.XL,
  XXL: Breakpoints.XXL,
} as const

type DeviceType = 'mobile' | 'desktop' | 'tablet'

type BreakpointHook = { [key in `is${Capitalize<DeviceType>}`]: boolean } & { sizes: SizeMap }

function useBreakpoints(): BreakpointHook {
  return {
    isMobile: useMediaQuery({ maxWidth: Breakpoints.XS }),
    isDesktop: useMediaQuery({ minWidth: Breakpoints.LG }),
    isTablet: useMediaQuery({ minWidth: Breakpoints.XS + 1, maxWidth: Breakpoints.LG - 1 }),
    sizes,
  }
}

export { Breakpoints, useBreakpoints }

/**
 * IMPORTANT!!!
 *
 * Try to not use this hook directly, it may cause performance issues
 *
 * Instead, use the result of this hook from AppContext
 */

import { useEffect, useState } from 'react';
import { isMobileOnly, isTablet, isDesktop } from 'react-device-detect';
import { useMediaQuery } from 'react-responsive';

export const breakpoints = {
  XS: 480,
  SM: 576,
  MD: 768,
  LG: 992,
  XL: 1200,
} as const;

export type Breakpoints = typeof breakpoints;

type DeviceType = 'mobile' | 'desktop' | 'XL' | 'MD' | 'SM' | 'LG' | 'XS';

export type IUseResponsive = (
    { [key in `is${Capitalize<DeviceType>}`]: boolean } & {
      breakpoints: Breakpoints
    }
);

export function useResponsive(): IUseResponsive {
  const [isXS, setIsXS] = useState(isMobileOnly);
  const mediaXS = useMediaQuery({ minWidth: breakpoints.XS });

  const [isSM, setIsSM] = useState(isMobileOnly);
  const mediaSM = useMediaQuery({ minWidth: breakpoints.SM });

  const [isMD, setIsMD] = useState(isTablet);
  const mediaMD = useMediaQuery({ minWidth: breakpoints.MD });

  const [isLG, setIsLG] = useState(isDesktop);
  const mediaLG = useMediaQuery({ minWidth: breakpoints.LG });

  const [isXL, setIsXL] = useState(isDesktop);
  const mediaXL = useMediaQuery({ minWidth: breakpoints.XL });

  useEffect(() => {
    setIsXS(mediaXS);
  }, [mediaXS]);

  useEffect(() => {
    setIsSM(mediaSM);
  }, [mediaSM]);

  useEffect(() => {
    setIsMD(mediaMD);
  }, [mediaMD]);

  useEffect(() => {
    setIsLG(mediaLG);
  }, [mediaLG]);

  useEffect(() => {
    setIsXL(mediaXL);
  }, [mediaXL]);

  return {
    isXS,
    isSM,
    isMD,
    isXL,
    isLG,
    breakpoints,
    isMobile: !isSM,
    isDesktop: isLG,
  };
}

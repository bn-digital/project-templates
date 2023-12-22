import {
  createContext,
  ReactElement,
  useContext,
  useMemo,
} from 'react';

import { IUseResponsive, useResponsive } from '@/hooks/useResponsive';

import { version } from '@/../package.json';

type AppContextValue = IUseResponsive & {
  version: string
};

type AppProviderProps = {
  children: ReactElement | ReactElement[]
};

export const AppContext = createContext({} as AppContextValue);

export function AppProvider({
  children,
}: AppProviderProps) {
  const responsive = useResponsive();

  const context: AppContextValue = useMemo(() => ({
    version,
    ...responsive,
  }), [responsive]);

  return (
    <AppContext.Provider value={context}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext<AppContextValue>(AppContext);
}

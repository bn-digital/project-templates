'use client';

import { ReactElement } from 'react';

import { AppContext, AppProvider, useAppContext } from './App.context';
import ConfigProvider from './ConfigProvider';
import EmotionProvider from './EmotionProvider';
import ErrorBoundary from './ErrorBoundary';
import StyleProvider from './StyleProvider';

export type AppProps = {
  children: ReactElement | ReactElement[]
};

App.Context = AppContext;
App.Provider = AppProvider;
App.useContext = useAppContext;
App.ThemeProvider = EmotionProvider;
App.ConfigProvider = ConfigProvider;
App.ErrorBoundary = ErrorBoundary;

export function App({
  children,
}: AppProps) {
  return (
    <App.ErrorBoundary>
      <App.Provider>
        <StyleProvider>
          <ConfigProvider includeGlobalStyles>
            {children}
          </ConfigProvider>
        </StyleProvider>
      </App.Provider>
    </App.ErrorBoundary>
  );
}

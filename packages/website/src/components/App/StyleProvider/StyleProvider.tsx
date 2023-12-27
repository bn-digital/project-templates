'use client';

import { useServerInsertedHTML } from 'next/navigation';
import { useState, ReactElement, useRef } from 'react';

import {
  createCache,
  extractStyle,
  StyleProvider as AntdStyleProvider,
} from '@ant-design/cssinjs';

export type StyleProvideProps = {
  children: ReactElement | ReactElement[]
};

export function StyleProvider({
  children,
}: StyleProvideProps) {
  const [cache] = useState(() => createCache());
  const isServerInserted = useRef<boolean>(false);

  useServerInsertedHTML(() => {
    if (isServerInserted.current) {
      return;
    }

    isServerInserted.current = true;

    return (
      <style
        id="antd"
        dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }}
      />
    );
  });

  return <AntdStyleProvider cache={cache}>{children}</AntdStyleProvider>;
}

'use client';

import type { ReactNode } from 'react';

import ExternalLink from '@/components/ExternalLink';
import Section from '@/components/Section';
import { useEffect } from "react"

export type WelcomeClientProps = {
  children: ReactNode
};

export function WelcomeClient({
  children,
}: WelcomeClientProps) {
  useEffect(() => {

  }, [])
  return (
    <Section
      title="Welcome"
      titleLevel={1}
      subtitle="This is the home page"
    >
      {children}
      <ExternalLink href="https://www.google.com">
        Google
      </ExternalLink>
    </Section>
  );
}

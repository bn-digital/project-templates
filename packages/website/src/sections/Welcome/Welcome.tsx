import ExternalLink from '@/components/ExternalLink';
import Section from '@/components/Section';

export function Welcome() {
  return (
    <Section
      title="Welcome"
      titleLevel={1}
      subtitle="This is the home page"
    >
      <ExternalLink href="https://www.google.com">
        Google
      </ExternalLink>
    </Section>
  );
}

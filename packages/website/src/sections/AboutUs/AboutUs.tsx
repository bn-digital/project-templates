import Image from '@/components/Image';
import Section from '@/components/Section';

import aboutUsImg from './assets/about-us.jpg';

export function AboutUs() {
  return (
    <Section
      title="About us"
      titleLevel={1}
      subtitle="This is the about page"
      description="About us description"
    >
      <Image
        src={aboutUsImg}
        alt="about-us"
      />
    </Section>
  );
}

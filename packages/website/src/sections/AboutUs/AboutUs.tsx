'use client';

import Image from '@/components/Image';
import Section from '@/components/Section';
import Title from '@/components/Title';
import { HomeDocument } from '@/graphql';
import { useQuery } from '@apollo/experimental-nextjs-app-support/ssr';

import aboutUsImg from './assets/about-us.jpg';

export function AboutUs() {
  const { data } = useQuery<HomeQuery, HomeQueryVariables>(HomeDocument);
  // const {data} = useHomeQuery();

  return (
    <Section
      title="About us"
      titleLevel={1}
      subtitle="This is the about page"
      description="About us description"
    >
      <Title level={2}>
        Title below was rendered on the client
      </Title>
      <Title level={3}>
        {data?.home?.data?.attributes?.hero?.heading?.title}
      </Title>
      <Image
        src={aboutUsImg}
        alt="about-us"
      />
    </Section>
  );
}

'use server';

import Title from '@/components/Title';
import { HomeDocument } from '@/graphql';
import { apolloRSC } from '@/utils/apollo';

export async function WelcomeServer() {
  const { data } = await apolloRSC().query<HomeQuery, HomeQueryVariables>({
    query: HomeDocument,
  });

  return (
    <>
      <Title level={2}>
        Title below was rendered on the server
      </Title>
      <Title level={3}>
        {data?.home?.data?.attributes?.hero?.heading?.title}
      </Title>
    </>
  );
}

import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '@/components/layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>yasai.tsx</title>
      </Head>
      <div>野菜</div>
    </Layout>
  );
};

export default Home;

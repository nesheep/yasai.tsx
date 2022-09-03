import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Head from 'next/head';
import { ReactNode } from 'react';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

type Props = { children: ReactNode };

const Layout = ({ children }: Props) => {
  return (
    <Container maxWidth="sm">
      <Head>
        <meta
          name="description"
          content="yasai.tsx"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
        <meta
          name="viewport"
          content="initial-scale=1, width=device-width"
        />
      </Head>
      <Navbar />
      <Box
        mt={8}
        mb={2}
      >
        {children}
      </Box>
      <Footer />
    </Container>
  );
};

export default Layout;

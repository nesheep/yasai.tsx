import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Head from 'next/head';
import { ReactNode } from 'react';

type Props = { children: ReactNode };

const Layout = ({ children }: Props) => {
  return (
    <Container>
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
      <Typography
        variant="h3"
        component="h1"
      >
        yasai.tsx
      </Typography>
      {children}
    </Container>
  );
};

export default Layout;

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  title: string;
  thumbnail: StaticImageData;
};

const GridItem = ({ children, title, thumbnail }: Props) => {
  return (
    <Box width="100%">
      <Box
        position="relative"
        width="100%"
        height={240}
      >
        <Image
          src={thumbnail}
          alt={title}
          layout="fill"
          objectFit="cover"
          style={{ borderRadius: '12px' }}
        />
      </Box>
      <Typography
        mt={1}
        variant="h6"
        textAlign="center"
      >
        {title}
      </Typography>
      <Typography mt={0.5}>{children}</Typography>
    </Box>
  );
};

export default GridItem;

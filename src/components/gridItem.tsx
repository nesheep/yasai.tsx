import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import { useRef } from 'react';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  title: string;
  thumbnail: StaticImageData;
};

const GridItem = ({ children, title, thumbnail }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'start center'] });
  const y = useTransform(scrollYProgress, [0, 1], [150, 0]);

  return (
    <motion.div
      ref={ref}
      style={{
        width: '100%',
        opacity: scrollYProgress,
        y,
      }}
    >
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
    </motion.div>
  );
};

export default GridItem;

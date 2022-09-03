import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import nasuImg01 from '@/assets/images/nasu_01.jpg';
import pimanImg01 from '@/assets/images/piman_01.jpg';
import tomatoImg01 from '@/assets/images/tomato_01.jpg';
import yasaiImg from '@/assets/images/yasai.jpg';
import GridItem from '@/components/gridItem';
import Layout from '@/components/layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>野菜.tsx</title>
      </Head>
      <Box>
        <Box
          width="100%"
          height={320}
        >
          <Box
            position="relative"
            width="100%"
            height="100%"
            component={motion.div}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={yasaiImg}
              alt="yasai"
              layout="fill"
              objectFit="cover"
              style={{ borderRadius: '12px' }}
            />
          </Box>
        </Box>
        <Box
          mt={2}
          textAlign="center"
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Typography>野菜を食べるとお腹が良くなる。</Typography>
        </Box>
        <Box mt={5}>
          <Typography
            variant="h5"
            textAlign="center"
            component={motion.div}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            新鮮な野菜たち
          </Typography>
          <Stack
            mt={2}
            spacing={5}
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <GridItem
              title="トマト"
              thumbnail={tomatoImg01}
            >
              {'トマト（蕃茄; 英語: tomato; 学名: Solanum lycopersicum）は、南アメリカのアンデス山脈高原地帯原産のナス科ナス属の植物、また、その果実のこと。' +
                'アカナスなどの別名でもよばれる。多年生植物で、果実は食用として利用される。緑黄色野菜の一種である。リンネの『植物の種』で記載された植物の一つである。'}
            </GridItem>
            <GridItem
              title="ナス"
              thumbnail={nasuImg01}
            >
              {'ナス（茄子、茄、ナスビ、学名: Solanum melongena）は、ナス科ナス属の植物。また、その果実のこと。別名ナスビともよばれる。' +
                'インド原産で、淡色野菜として世界中で栽培されている。果実は黒紫色が多いが、色や形は様々で多数の品種がある。'}
            </GridItem>
            <GridItem
              title="ピーマン"
              thumbnail={pimanImg01}
            >
              {'日本語における「ピーマン」の由来は、広義のトウガラシを指すフランス語の“piment”（ピマン）、あるいはポルトガル語の“pimento”（ピーメント）とされる。' +
                'ピマンやピーメントの語源は、「塗料」「顔料」を意味するラテン語の“pigmentum” だと言われている。明治期では西洋とうがらし、甘とうがらしとも。'}
            </GridItem>
          </Stack>
        </Box>
      </Box>
    </Layout>
  );
};

export default Home;

import React from 'react';
import { Typography, styled, Paper } from '@mui/material';

const BannerImg = styled(Paper)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  backgroundImage: `url('/images/Banner.png')`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  height: '17.4375rem',
});
const TextBanner = styled(Typography)({
  component: 'h1',
  textAlign: 'center',
  textTransform: 'uppercase',
  fontSize: '3.125rem',
  fontStyle: 'oblique',
  fontWeight: '800',
});
const Banner = () => {
  return (
    <BannerImg alt='Banner'>
      <TextBanner
        color='primary'
        component='p'
        sx={{
          fontSize: {
            mobile: '2.125rem',
            tablet: '3.125rem',
            laptop: '3.125rem',
            desktop: '3.125rem',
          },
        }}>
        New and Bright
      </TextBanner>
    </BannerImg>
  );
};
export default Banner;

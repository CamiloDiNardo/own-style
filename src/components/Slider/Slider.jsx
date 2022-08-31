import React from 'react';
import { Typography, styled, Paper } from '@mui/material';
const SliderImg = styled(Paper)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  backgroundImage: `url('/images/Slider.png')`,
  backgroundAttachment: 'fixed',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  height: '30rem',
});
const MarkYour = styled(Typography)({
  component: 'h1',
  fontweight: 100,
  textAlign: 'center',
  paddingTop: '6.25rem',
  textTransform: 'uppercase',
});
const OwnStyle = styled(Typography)({
  fontFamily: 'Times New Roman',
  fontWeight: '400',
  textAlign: 'center',
  textTransform: 'uppercase',
});

const Slider = () => {
  return (
    <SliderImg>
      <MarkYour
        color='primary'
        sx={{
          fontSize: {
            mobile: '2.125rem',
            tablet: '3.125rem',
            laptop: '3.125rem',
            desktop: '3.125rem',
          },
        }}>
        mark your
      </MarkYour>
      <OwnStyle
        color='primary'
        sx={{
          fontSize: {
            mobile: '3.375rem',
            tablet: '4.375rem',
            laptop: '4.375rem',
            desktop: '4.375rem',
          },
        }}>
        own style
      </OwnStyle>
    </SliderImg>
  );
};

export default Slider;

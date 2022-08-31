import React from 'react';
import { Grid, Typography, styled } from '@mui/material';
const Footer = () => {
  const ContainerFooter = styled(Grid)({
    fontFamily: 'Times New Roman',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#66a804',
  });
  const Rights = styled(Typography)({
    fontSize: '1.5625rem',
  });
  return (
    <footer>
      <ContainerFooter
        sx={{
          height: {
            mobile: '3rem',
            tablet: '6rem',
            laptop: '6rem',
            desktop: '6rem',
          },
        }}>
        <Rights color='primary'>All rights reserved</Rights>
      </ContainerFooter>
    </footer>
  );
};

export default Footer;

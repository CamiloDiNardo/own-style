import React from 'react';
import { Typography, styled, Box } from '@mui/material';
const Armchair = styled(Box)({
  display: 'flex',
});
const ArmchairImg = styled('img')({
  width: '15.625rem',
  height: '15.625rem',
  marginLeft: '7.5rem',
  alignSelf: 'center',
});
const ContainerText = styled(Box)({});
const Us = styled(Typography)({
  fontFamily: 'Times New Roman',
  width: '31.875rem',
  fontWeight: '700',
});
const Text = styled(Typography)({
  fontFamily: 'Times New Roman',
  fontSize: '1.25rem',
});
const ArmchairLogo = () => {
  return (
    <Armchair
      sx={{
        flexDirection: {
          mobile: 'column',
          tablet: 'column',
          laptop: 'row',
          desktop: 'row',
        },
        margin: {
          mobile: 'none',
          tablet: 'none',
          laptop: '6.25rem',
          desktop: '6.25rem',
        },
        marginTop: {
          mobile: '3rem',
          tablet: '3rem',
          laptop: 'none',
          desktop: 'none',
        },
      }}>
      <ArmchairImg
        src='./images/Armchair.png'
        alt='Armchair'
        sx={{
          marginLeft: {
            mobile: '1rem',
            tablet: '1rem',
            laptop: '7.5rem',
            desktop: '7.5rem',
          },
        }}></ArmchairImg>
      <ContainerText
        sx={{
          marginLeft: {
            mobile: '0rem',
            tablet: '0rem',
            laptop: '13.75rem',
            desktop: '13.75rem',
          },
          width: {
            mobile: '100%',
            tablet: '100%',
            laptop: '31.875rem',
            desktop: '31.875rem',
          },
        }}>
        <Us
          color='secondary'
          component='h1'
          sx={{
            fontSize: {
              mobile: '3rem',
              tablet: '3rem',
              laptop: '5rem',
              desktop: '5rem',
            },
            textAlign: {
              mobile: 'center',
              tablet: 'center',
              laptop: 'none',
              desktop: 'none',
            },
            marginTop: {
              mobile: '3rem',
              tablet: '3rem',
              laptop: 'none',
              desktop: 'none',
            },
            width: {
              mobile: '100%',
              tablet: '100%',
              laptop: '31.875rem',
              desktop: '31.875rem',
            },
          }}>
          Us
        </Us>
        <Text
          color='secondary'
          component='p'
          sx={{
            padding: {
              mobile: '1rem',
              tablet: 'none',
              laptop: 'none',
              desktop: 'none',
            },
          }}>
          We are dedicated to the design and restoration of furniture to order
          and your taste to make them unique, unrepeatable and functional. Our
          designs are born from the imagination and the passion we feel when
          creating them. We seek to generate unique pieces in your space,
          prioritizing above all the comfort. We work furniture with mirrors,
          with glitter paint and with epoxy resin.
        </Text>
      </ContainerText>
    </Armchair>
  );
};

export default ArmchairLogo;

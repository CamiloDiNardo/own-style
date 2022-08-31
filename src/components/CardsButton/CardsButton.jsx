import React, { useState } from 'react';
import { PhraseButton } from '..';
import { Button, styled, Box } from '@mui/material';
const ContainerButton = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  marginTop: '3.75rem',
});
const ButtonCards = styled(Button)({
  cursor: 'pointer',
  height: '2.6875rem',
  width: '8.75rem',
  backgroundColor: '#008000',
  border: '0.125rem solid #fff',
  fontSize: '1.875rem',
  textTransform: 'uppercase',
  '&:hover': {
    backgroundColor: '#007000',
  },
});

const CardsButton = () => {
  const [See, setSee] = useState(true);
  return (
    <ContainerButton
      sx={{
        marginButton: {
          mobile: '3.25rem',
          tablet: '6rem',
          laptop: '6rem',
          desktop: '6rem',
        },
        height: {
          mobile: '3rem',
          tablet: '5rem',
          laptop: '5rem',
          desktop: '5rem',
        },
      }}>
      {See ? (
        <ButtonCards onClick={() => setSee(false)}>Ver Mas</ButtonCards>
      ) : (
        <PhraseButton />
      )}
    </ContainerButton>
  );
};

export default CardsButton;

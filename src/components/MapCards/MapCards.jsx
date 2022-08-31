import React from 'react';
import { CardsProducts } from '../../components';
import Cardsinfo from '../../Cards.json';
import { Box, styled } from '@mui/material';
const ContainerCards = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-evenly',
});
const MapCards = () => {
  return (
    <ContainerCards>
      {Cardsinfo.map(({ images, article, alt, space }, index) => (
        <CardsProducts
          images={images}
          article={article}
          alt={alt}
          space={space}
          key={index}
        />
      ))}
    </ContainerCards>
  );
};
export default MapCards;

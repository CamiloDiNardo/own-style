import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  styled,
} from '@mui/material';
const CardsFurniture = styled(Card)({
  width: '18.75rem',
  height: '24.375rem',
  marginTop: '5.625rem',
  '&:hover': {
    boxShadow: '0.3125rem 0.3125rem 1.25rem rgba(0, 0, 0, 0.4)',
    transform: 'translateY(-3%)',
  },
});
const CardsImg = styled(CardMedia)({
  component: 'img',
  height: '18.75rem',
  width: '100%',
});

const Title = styled(Typography)({
  fontFamily: 'Times New Roman',
  fontSize: '2.5rem',
  color: '#000',
  textAlign: 'center',
  fontWeight: '700',
  lineHeight: '1.875rem',
});
const Descripcion = styled(Typography)({
  fontSize: '1.6875rem',
  textAlign: 'center',
});
const CardsProducts = ({ images, article, alt, space }) => {
  return (
    <CardsFurniture id={'Products'}>
      <CardsImg image={images} alt={alt} />
      <CardContent>
        <Title>{article}</Title>
        <Descripcion>{space}</Descripcion>
      </CardContent>
    </CardsFurniture>
  );
};
CardsProducts.propTypes = {
  images: PropTypes.string.isRequired,
  article: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  space: PropTypes.string.isRequired,
};

export default CardsProducts;

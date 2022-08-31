import React from 'react';
import { Typography, styled } from '@mui/material';
const Phrase = styled(Typography)({
  fontFamily: 'Times New Roman',
  fontSize: '1.5625rem',
  cursor: 'text',
  height: '2.5rem',
  width: 'auto',
});
const PhraseButton = () => {
  return (
    <Phrase
      color='secondary'
      sx={{
        paddingLeft: {
          mobile: '2rem',
          tablet: '0rem',
          laptop: '0rem',
          desktop: '0rem',
        },
      }}>
      These are all products!
    </Phrase>
  );
};
export default PhraseButton;

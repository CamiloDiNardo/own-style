import React from 'react';
import { AppBar, styled, Toolbar, Typography } from '@mui/material';
const Menu = styled(AppBar)({
  backgroundColor: '#000',
  position: 'fixed',
  top: '0',
  zIndex: '20',
  width: '100%',
});
const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
});
const Links = styled(Typography)({
  fontWeight: '600',
  textTransform: 'uppercase',
  textDecoration: 'none',
  '&:hover': {
    color: '#00ffff',
  },
});
const Logo = styled('img')({
  width: '14.375rem',
  height: 'auto',
  paddingTop: '1rem',
});
const Navbar = () => {
  return (
    <Menu
      sx={{
        height: {
          mobile: '9rem',
          tablet: '6.25rem',
          laptop: '6.25rem',
          desktop: '6.25rem',
        },
      }}>
      <StyledToolbar
        sx={{
          flexDirection: {
            mobile: 'column',
            tablet: 'row',
            laptop: 'row',
            desktop: 'row',
          },
        }}>
        <Logo src='/images/Logo.png' alt='Logo'></Logo>
        <Links
          color='primary'
          component='a'
          href='#'
          sx={{
            fontSize: {
              mobile: '1rem',
              tablet: '1.25rem',
              laptop: '1.25rem',
              desktop: '1.25rem',
            },
            lineHeight: {
              mobile: '1rem',
              tablet: '1.50rem',
              laptop: '1.50rem',
              desktop: '1.50rem',
            },
          }}>
          Home
        </Links>
        <Links
          color='primary'
          component='a'
          href='#Products'
          sx={{
            fontSize: {
              mobile: '1rem',
              tablet: '1.25rem',
              laptop: '1.25rem',
              desktop: '1.25rem',
            },
            lineHeight: {
              mobile: '1rem',
              tablet: '1.50rem',
              laptop: '1.50rem',
              desktop: '1.50rem',
            },
          }}>
          Products
        </Links>
        <Links
          color='primary'
          component='a'
          href='#Contact'
          sx={{
            fontSize: {
              mobile: '1rem',
              tablet: '1.25rem',
              laptop: '1.25rem',
              desktop: '1.25rem',
            },
            lineHeight: {
              mobile: '1rem',
              tablet: '1.50rem',
              laptop: '1.50rem',
              desktop: '1.50rem',
            },
          }}>
          Contact
        </Links>
      </StyledToolbar>
    </Menu>
  );
};

export default Navbar;

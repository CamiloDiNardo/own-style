import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, styled } from '@mui/material';
import { WhatsApp, LocalPhone, Place } from '@mui/icons-material';
const ContainerContactInfo = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  justifyContent: 'space-evenly',
  color: '#fff',
  backgroundColor: '#000',
});
const ContactTitle = styled(Typography)({
  component: 'h1',
  fontFamily: 'Times New Roman',
  textAlign: 'center',
});
const ContactText = styled(Typography)({
  component: 'p',
  fontSize: '1.375rem',
  textAlign: 'center',
});
const ScheduleContainer = styled(Typography)({
  display: 'flex',
  flexDirection: 'column',
});
const WppIcon = styled(WhatsApp)({
  fontSize: '1.375rem',
  marginRight: '1rem',
});
const PhoneIcon = styled(LocalPhone)({
  fontSize: '1.375rem',
  marginRight: '2rem',
});
const UbicationIcon = styled(Place)({
  fontSize: '1.375rem',
  marginRight: '1rem',
});

const Contact = (props) => {
  return (
    <ContainerContactInfo
      id={'Contact'}
      sx={{
        height: {
          mobile: '10rem',
          tablet: '20rem',
          laptop: '20rem',
          desktop: '20rem',
          marginTop: '2rem',
        },
      }}>
      <ScheduleContainer>
        <ContactTitle
          sx={{
            fontSize: {
              mobile: '2.125rem',
              tablet: '3.125rem',
              laptop: '3.125rem',
              desktop: '3.125rem',
            },
          }}>
          Contact
        </ContactTitle>
        <ContactText
          sx={{
            fontSize: {
              mobile: '1rem',
              tablet: '1.375rem',
              laptop: '1.375rem',
              desktop: '1.375rem',
            },
          }}>
          <WppIcon
            color='error'
            sx={{
              width: {
                mobile: '1.25rem',
                tablet: '1.875rem',
                laptop: '1.875rem',
                desktop: '1.875rem',
              },
              height: {
                mobile: '1.25rem',
                tablet: '1.875rem',
                laptop: '1.875rem',
                desktop: '1.875rem',
              },
            }}
          />
          0800-000-0000
        </ContactText>
        <ContactText
          sx={{
            fontSize: {
              mobile: '1rem',
              tablet: '1.375rem',
              laptop: '1.375rem',
              desktop: '1.375rem',
            },
          }}>
          <PhoneIcon
            color='error'
            sx={{
              width: {
                mobile: '1.25rem',
                tablet: '1.875rem',
                laptop: '1.875rem',
                desktop: '1.875rem',
              },
              height: {
                mobile: '1.25rem',
                tablet: '1.875rem',
                laptop: '1.875rem',
                desktop: '1.875rem',
              },
            }}
          />
          011-4022-0039
        </ContactText>
        <ContactText
          sx={{
            fontSize: {
              mobile: '1rem',
              tablet: '1.375rem',
              laptop: '1.375rem',
              desktop: '1.375rem',
            },
          }}>
          <UbicationIcon
            color='error'
            sx={{
              width: {
                mobile: '1.25rem',
                tablet: '1.875rem',
                laptop: '1.875rem',
                desktop: '1.875rem',
              },
              height: {
                mobile: '1.25rem',
                tablet: '1.875rem',
                laptop: '1.875rem',
                desktop: '1.875rem',
              },
            }}
          />
          Lorem ipsum 555
        </ContactText>
      </ScheduleContainer>
      <ScheduleContainer>
        <ContactTitle
          sx={{
            fontSize: {
              mobile: '2.125rem',
              tablet: '3.125rem',
              laptop: '3.125rem',
              desktop: '3.125rem',
            },
          }}>
          Schedule
        </ContactTitle>
        <ContactText
          sx={{
            fontSize: {
              mobile: '1rem',
              tablet: '1.375rem',
              laptop: '1.375rem',
              desktop: '1.375rem',
            },
          }}>
          Lunes a Viernes
        </ContactText>
        <ContactText
          sx={{
            fontSize: {
              mobile: '1rem',
              tablet: '1.375rem',
              laptop: '1.375rem',
              desktop: '1.375rem',
            },
          }}>
          10:00 - 19:00 hs.
        </ContactText>
      </ScheduleContainer>
    </ContainerContactInfo>
  );
};

Contact.propTypes = {};

export default Contact;

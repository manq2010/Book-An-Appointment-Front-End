import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Container = styled(Box)({
  paddingTop: '25px',
  display: 'flex',
  height: '100vh',
  flexDirection: 'row',
  '@media (max-width: 600px)': {
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const ImageContainer = styled(Box)({
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '& img': {
    objectFit: 'cover',
    maxWidth: '100%',
    maxHeight: '50vh',
    '@media (max-width: 600px)': {
      maxHeight: '40vh',
      maxWidth: '60%',
    },
  },
});

const DetailsContainer = styled(Box)({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  marginTop: '30px',
  marginLeft: '20px',
  '@media (max-width: 600px)': {
    maxWidth: '80%',
    marginLeft: 0,
  },
});

const Title = styled(Typography)({
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#4f4f4f',
  margin: 0,
  padding: 0,
  alignSelf: 'flex-end',
  '@media (max-width: 600px)': {
    alignSelf: 'flex-start',
  },
});

const Description = styled(Typography)({
  fontSize: '13px',
  margin: '20px 0',
  color: '#4f4f4f',
  '@media (max-width: 600px)': {
    fontSize: '15px',
  },
});

const InfoContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '30px',
});

const InfoRow = styled(Box)(({ theme, isOdd }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  color: '#4f4f4f',
  justifyContent: 'space-between',
  backgroundColor: isOdd ? '#d4d4d4' : '#ffffff',
  padding: '10px',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '5px',
  },
}));

const InfoTitle = styled(Typography)({
  fontWeight: 'bold',
  color: '#4f4f4f',
});

const ReserveButtonContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
  flex: 1,
  '@media (max-width: 600px)': {
    justifyContent: 'center',
    marginTop: '20px',
  },
});

const ReserveButton = styled(Button)({
  backgroundColor: '#119911',
  color: '#ffffff',
  padding: '10px 20px',
  marginBottom: '3rem',
  borderRadius: '20px',
  textDecoration: 'none',
  alignSelf: 'flex-end',
  index: 0,
  transition: 'background-color 0.3s ease-out',
  '&:hover': {
    backgroundColor: '#15b715',
  },

});

function Details({ classDetails }) {
  return (
    <Container>
      <ImageContainer>
        <img src={classDetails.photo} alt="stack" />
      </ImageContainer>
      <DetailsContainer>
        <Title>{classDetails.name}</Title>
        <Description>{classDetails.description}</Description>
        <InfoContainer>
          <InfoRow isOdd>
            <InfoTitle>Mentor:</InfoTitle>
            <Typography>{classDetails.mentor_name}</Typography>
          </InfoRow>
          <InfoRow>
            <InfoTitle>Duration:</InfoTitle>
            <Typography>{classDetails.duration}</Typography>
          </InfoRow>
          <InfoRow isOdd>
            <InfoTitle>Price:</InfoTitle>
            <Typography>
              $
              {classDetails.price}
            </Typography>
          </InfoRow>
        </InfoContainer>
        <ReserveButtonContainer>
          <ReserveButton component={Link} to={`/class/${classDetails.id}/reservations`}>Reserve</ReserveButton>
        </ReserveButtonContainer>
      </DetailsContainer>
    </Container>
  );
}

Details.propTypes = {
  classDetails: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    mentor_name: PropTypes.string,
    duration: PropTypes.string,
    price: PropTypes.string,
    photo: PropTypes.string,
  }).isRequired,
};

export default Details;

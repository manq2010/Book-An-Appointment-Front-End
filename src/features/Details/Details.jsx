import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Container = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
});

const ImageContainer = styled(Box)({
  flex: 1,
  height: '80vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '& img': {
    height: '50%',
    objectFit: 'cover',
  },
});

const DetailsContainer = styled(Box)({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '20px',
});

const Title = styled(Typography)({
  fontSize: '24px',
  margin: 0,
  padding: 0,
  alignSelf: 'flex-end',
});

const Description = styled(Typography)({
  fontSize: '13px',
  margin: '20px 0',
  color: '#4f4f4f',
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
});

const ReserveButton = styled(Button)({
  backgroundColor: '#119911',
  color: '#ffffff',
  padding: '10px 20px',
  borderRadius: '20px',
  textDecoration: 'none',
  alignSelf: 'flex-end',
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
            <Typography>{classDetails.mentorName}</Typography>
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
          <ReserveButton component={Link} to="/reserve">Reserve</ReserveButton>
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
    mentorName: PropTypes.string,
    duration: PropTypes.string,
    price: PropTypes.string,
    photo: PropTypes.string,
  }).isRequired,
};

export default Details;

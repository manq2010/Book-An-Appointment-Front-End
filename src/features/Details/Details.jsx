import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const ImageContainer = styled.div`
  flex: 1;
  img {
    width: 100%;
  }
`;

const DetailsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin: 0;
  padding: 0;
`;

const Description = styled.p`
  font-size: 16px;
  margin: 20px 0;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => (props.isOdd ? '#f7f7f7' : '#ffffff')};
  padding: 10px;
  margin-bottom: 5px;
`;

const InfoTitle = styled.span`
  font-weight: bold;
`;

const ReserveButton = styled(Link)`
  background-color: #007bff;
  color: #ffffff;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  align-self: flex-end;
`;

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
            <span>{classDetails.mentor_name}</span>
          </InfoRow>
          <InfoRow>
            <InfoTitle>Duration:</InfoTitle>
            <span>{classDetails.duration}</span>
          </InfoRow>
          <InfoRow isOdd>
            <InfoTitle>Price:</InfoTitle>
            <span>{classDetails.price}</span>
          </InfoRow>
        </InfoContainer>
        <ReserveButton to="/reservation">Reserve</ReserveButton>
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

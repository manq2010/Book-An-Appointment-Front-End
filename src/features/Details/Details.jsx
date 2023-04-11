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
 height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
  img {
    width: 80%;
  }
`;

const DetailsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const Title = styled.h2`
  display: flex;
  font-size: 24px;
  margin: 0;
  padding: 0;
  justify-content: flex-end;
  align-items: flex-end;
`;

const Description = styled.p`
  font-size: 13px;
  margin: 20px 0;
  color: #4f4f4f;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

const InfoRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #4f4f4f;
  justify-content: space-between;
  background-color: ${(props) => (props.isOdd ? '#d4d4d4' : '#ffffff')};
  padding: 10px;
`;

const InfoTitle = styled.span`
  font-weight: bold;
  color: #4f4f4f;
`;

const ReserveButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    flex: 1;
`;

const ReserveButton = styled(Link)`
  background-color: var(--tertiary);
  color: #ffffff;
  padding: 10px 20px;
  border-radius: 20px;
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
            <span>{classDetails.mentorName}</span>
          </InfoRow>
          <InfoRow>
            <InfoTitle>Duration:</InfoTitle>
            <span>{classDetails.duration}</span>
          </InfoRow>
          <InfoRow isOdd>
            <InfoTitle>Price:</InfoTitle>
            <span>
              $
              {classDetails.price}
            </span>
          </InfoRow>
        </InfoContainer>
        <ReserveButtonContainer>
          <ReserveButton to="/reservation">Reserve</ReserveButton>
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

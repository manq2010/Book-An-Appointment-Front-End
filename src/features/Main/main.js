import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import SlideshowWithPagination from 'react-slideshow-with-pagination';
import { fetchClasses } from './mainSlice';
import './styles.css';

const Section = styled.section`

.item-wrapper {
  display: flex;
  flex-direction: row;
  height: 460px;
  }

.item-card {
  height: 460px;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 20px;
  background-color: #fff;
  overflow: hidden;
}

.item-photo-wrapper {
  height: 60%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.item-photo {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
}

.item-details {
  height: 50%;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  text-align: center;
}

.item-name {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.item-description {
  font-size: 14px;
  margin-bottom: 10px;
}

.item-price {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
}  
`;

const AddClasses = () => {
  const accessToken = useSelector((state) => state.session.accessToken);
  const classItems = useSelector((state) => state.addClassesReducer.classes);
  const classesStatus = useSelector((state) => state.addClassesReducer.status);
  const error = useSelector((state) => state.addClassesReducer.error);

  const dispatch = useDispatch();

  useEffect(() => {
    if (classesStatus === 'idle') {
      dispatch(fetchClasses(accessToken));
    }
  }, [classesStatus, dispatch]);

  const newClassTable = (classItem) => (
    <React.Fragment className="item-card" key={classItem.id}>
      <div className="item-photo-wrapper">
        <img className="item-photo" src={classItem.photo} alt="Class" />
      </div>
      <div className="item-details">
        <div className="item-name">{classItem.name}</div>
        <div className="item-description">{classItem.description}</div>
        <div className="item-price">{classItem.price}</div>
        <div className="item-mentor">{classItem.mentor_name}</div>
        <div className="item-duration">{classItem.duration}</div>
      </div>
    </React.Fragment>
  );
  let content;

  if (classesStatus === 'succeeded') {
    content = classItems.length > 0 ? (
      < >
        <SlideshowWithPagination
          showNumbers
          showDots
          showArrows
          numberOfCardsPerScreen={2}
          showOneCardForWidthLower="sm"
          slideshowContainerMaxWidth="100px"
          cardWidth="100px"
          cardHeight={100}
        >
          {classItems.map((classItem) => newClassTable(classItem))}
        </SlideshowWithPagination>
      </>
    ) : ('');
  } else if (classesStatus === 'failed') {
    content = (
      <>
        <h1>classes not found</h1>
        <p>{error}</p>
      </>
    );
  }

  return (
    <Section>
      <div className="item-wrapper">
        {content}
      </div>
    </Section>
  );
};

export default AddClasses;

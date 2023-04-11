/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
// import Slider from 'react-slick';
// import settings from './caroussel';
import { fetchClasses } from './mainSlice';

const Section = styled.section`
display: flex;
flex-wrap: wrap;
justify-content: center;
width: 100%;
padding: 0 10%;

.item-card {
  height: 250px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 50%;
  margin: 10px;
  box-shadow: 2px 1px 10px #e0e0e0;
  background-color: #fcfcfc;
  overflow: hidden;
}

.item-photo-wrapper {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}

.item-photo {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
}

.item-price {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  font-size: 11px;
  background-color: #97bf0f;
  color: #fcfcfc;
  padding-top: 10px;
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
    <div className="item-card" key={classItem.id}>
      <div className="item-photo-wrapper">
        <img className="item-photo" src={classItem.photo} alt="Class" />
      </div>
      <div className="item-all">
        <p>{classItem.name}</p>
        <p>{classItem.description}</p>
        {/* <p>{classItem.price}</p>
        <p>{classItem.mentor_name}</p>
        <p>{classItem.duration}</p> */}
      </div>
    </div>
  );

  let content;

  if (classesStatus === 'succeeded') {
    content = classItems.length > 0 ? (
      <>
        <h3>List of my current classes</h3>
        <div>
          {classItems.map((classItem) => newClassTable(classItem))}
        </div>
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
      <div>
        {content}
      </div>
    </Section>
  );
};

export default AddClasses;

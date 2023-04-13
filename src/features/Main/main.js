import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import SlideshowWithPagination from 'react-slideshow-with-pagination';
import { fetchClasses } from './mainSlice';

const Section = styled.section`
margin-top: 2rem;
.item-card {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

}

.item-photo {
  border-radius: 50%;
  object-fit: cover;
  width: 200px;
  margin-bottom: 1rem;
}

.item-details {
  text-align: center;

  p {
    margin-top: 1rem;
    text-align: center;
  }
}

.jss34 {
  display: flex;
  justify-content: center;
}

@media (min-width: 320px){
.item-card {
margin: 1rem;
padding: 1rem;
}

.item-photo {
  width: 250px;
  margin-bottom: 1rem;
}
  }

  @media (min-width: 480px){
.item-card {
  margin: 2rem;
  padding: 2rem;
}

  .item-photo {
    width: 350px;
  }
  }

  @media (min-width: 768px){
    /* padding: 0 100px 0 300px; */
  }

  @media (min-width: 1080px){
    /* padding: 0 150px 0 350px; */
  }

  @media (min-width: 1200px){
    /* padding: 0 200px 0 400px; */
  }
`;

const MainClasses = () => {
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
    <Link to={`/class/${classItem.id}`}>
      <React.Fragment key={classItem.id}>
        <div className="item-card">
          <div className="item-photo-wrapper">
            <img className="item-photo" src={classItem.photo} alt="Class" />
          </div>
          <div className="item-details">
            <h3 className="item-name">{classItem.name}</h3>
            <p className="item-description">{classItem.description}</p>
          </div>
        </div>
      </React.Fragment>
    </Link>
  );

  let content;

  if (classesStatus === 'succeeded') {
    content = classItems.length > 0 ? (
      <div className="item-wrapper" style={{ position: 'relative', alignItems: 'center' }}>
        <SlideshowWithPagination
          option={classItems}
          showNumbers
          showDots
          showArrows
          autoplay={false}
          cardMarginY={10}
          animateHeight
          enableMouseEvents
          cardsContainerJustify="center"
          numberOfCardsPerScreen={3}
          paginationMarginTop={3}
          showOneCardForWidthLower="xs"
          slideshowContainerMaxWidth="sm"
          cardWidth={100}
          cardHeight={100}
          springConfig={{ duration: '1s', easeFunction: 'ease-in-out', delay: '0s' }}
        >
          {classItems.map((classItem) => (
            <div key={classItem.id}>
              {newClassTable(classItem)}
            </div>
          ))}
        </SlideshowWithPagination>
      </div>
    ) : ('');
  } else if (classesStatus === 'failed') {
    content = (
      <div>
        <h1>classes not found</h1>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <Section>
      {content}
    </Section>
  );
};

export default MainClasses;

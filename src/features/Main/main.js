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
  /* width: 500px;
  margin-left:0px; */
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
  /* border: solid 1px var(--secondary); */
}

.item-photo {
  border-radius: 50%;
  object-fit: cover;
  width: 200px;
  margin-bottom: 1rem;
  /* width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover; */
}

.item-details {
  text-align: center;

  h3 {
    /* font-size: var(--fs-xl); */
    /* line-height: 1.2; */
    /* font-weight: bold; */
  }

  p {
    margin-top: 1rem;
    text-align: center;
  }
  
  /* height: 50%;
  width: 60%;
  margin-left:30px;
  text-align: center;
  color: var(--tertiary); */
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
    /* padding: 0 50px; */
    /* margin: 30px; */

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



.item-wrapper {
  /* display: flex;
  height: 480px;
  overflow: hidden; */
}

.item-photo-wrapper {
  /* width: 200px; */
  /* margin-top:100px;
  margin-left:30px;
  height: 200px;
  width: 200px;
  align-items: center; */
}

.item-photo {
  /* width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover; */
}

.item-details {
  /* height: 50%;
  width: 60%;
  margin-left:30px;
  text-align: center;
  color: var(--tertiary); */
}

.item-name {
  /* font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
  text-align: center; */
}

.item-description {
  /* font-size: 14px;
  margin-bottom: 10px;
  text-align: center;
  width: 80%;
  height: 50%; */
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

  if (classesStatus) {
    // const classPairs = [];
    // for (let i = 0; i < classItems.length; i += 2) {
    //   const classItem1 = classItems[i];
    //   const classItem2 = classItems[i + 1] || null;
    //   classPairs.push([classItem1, classItem2]);
    // }
    content = classItems.length > 0 ? (
      <div className="item-wrapper" style={{ position: 'relative' }}>
        <SlideshowWithPagination
          // style={{ color: 'green' }}
          option={classItems}
          showNumbers
          showDots
          showArrows
          autoplay={false}
          // cardMarginX={100}
          cardMarginY={10}
          animateHeight
          enableMouseEvents
          cardsContainerJustify="space-around"
          numberOfCardsPerScreen={3}
          paginationMarginTop={3}
          // cardWidth={50}
          showOneCardForWidthLower="l"
          slideshowContainerMaxWidth
          cardWidth={100}
          cardHeight={100}
        >
          {classItems.map((classItem) => (
            // eslint-disable-next-line react/jsx-key
            <div>
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

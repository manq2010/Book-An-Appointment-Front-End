import React from 'react';
// import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
import Layout from '../layout/Layout';
import Details from '../features/Details/Details';

const DetailsPage = () => {
  // const { id } = useParams();
  // const classes = useSelector((state) => state.addClassesReducer.classes);
  // const classDetails = classes.find((item) => item.id.toString() === id);
  const classDetails = {
    id: 1,
    name: 'JavaScript',
    description: 'JavaScript is a programming language that conforms to the ECMAScript specification.',
    price: 100,
    photo: 'https://getbutterfly.com/wp-content/uploads/2016/04/logo-js.jpg',
    mentorName: 'John Doe',
    duration: 60,
  };
  return (
    <Layout>
      <main>
        <Details classDetails={classDetails} />
      </main>
    </Layout>
  );
};

export default DetailsPage;

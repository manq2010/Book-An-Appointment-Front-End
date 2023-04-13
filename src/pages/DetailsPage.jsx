import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Layout from '../layout/Layout';
import Details from '../features/Details/Details';

const DetailsPage = () => {
  const { id } = useParams();
  const classes = useSelector((state) => state.mainReducer.classes);
  const classDetails = classes.find((item) => item.id.toString() === id);
  return (
    <Layout>
      <main>
        <Details classDetails={classDetails} />
      </main>
    </Layout>
  );
};

export default DetailsPage;

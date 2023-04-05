import React from 'react';
// import { Helmet } from 'react-helmet';
import AddClasses from '../features/AddClasses/AddClasses';
import Layout from '../layout/Layout';

const AddClassesPage = () => (
  <Layout>
    {/* <Helmet>
        <title>Add | Classes</title>
      </Helmet> */}
    <main>
      <AddClasses />
    </main>
  </Layout>
);

export default AddClassesPage;

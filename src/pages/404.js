import * as React from 'react';

import Layout from '../layouts/Layout';
import Seo from '../components/atoms/Seo';

const NotFoundPage = () => {
  return (
    <Layout>
      <Seo title='404 - Page not found' />
      <h1>404: Not Found :C</h1>
      <p>You just hit a route that doesn&#39;t exist...</p>
    </Layout>
  );
};

export default NotFoundPage;

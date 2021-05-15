import * as React from 'react';

import Layout from '../layouts/Layout';
import Seo from '../components/atoms/Seo';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hey, I'm Max! <span role="img" aria-label="Waving hand emoji">👋</span></h1>
    <br/>
    <p>I'm a software engineer working with web technologies for Ellos Group. I specialize in frontend development, but am currently focusing on cloud architecture and devops.</p>
  </Layout>
);

export default IndexPage;

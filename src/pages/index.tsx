import * as React from 'react';
import { HeadFC, Link, PageProps } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout title="Home">
      <div>
        <h1>Welcome to my shop</h1>
      </div>
    </Layout>
  );
};

export function Head() {
  return <SEO title="home" />;
}

export default IndexPage;

import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const AboutUs = () => {
  return (
    <Layout title="About">
      <div>
        <h1>About us</h1>
      </div>
    </Layout>
  );
};
export function Head() {
  return <SEO title="about" />;
}

export default AboutUs;

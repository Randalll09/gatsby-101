import * as React from 'react';
import { HeadFC, Link, PageProps } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';

const IndexPage = ({ data }: PageProps<Queries.ProductQuery>) => {
  return (
    <Layout title="Home">
      <div>
        <h1>Welcome to my shop</h1>
      </div>
      {data.allContentfulProduct.nodes.map((v) => (
        <div key={v.id}>
          <Link to={`/products/${v.id}`}>
            <GatsbyImage
              image={getImage(v.photo?.gatsbyImageData!)!}
              alt={v.id}
            />
            <p>{v.price}</p>
          </Link>
        </div>
      ))}
    </Layout>
  );
};
export const query = graphql`
  query Product {
    allContentfulProduct {
      nodes {
        price
        id
        photo {
          gatsbyImageData(placeholder: BLURRED, height: 300)
        }
      }
    }
  }
`;
export function Head() {
  return <SEO title="home" />;
}

export default IndexPage;

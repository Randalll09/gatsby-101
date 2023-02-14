import { graphql, PageProps } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as React from 'react';
import Layout from '../../components/Layout';

export default function ProductDetail({
  data,
}: PageProps<Queries.productDetailQuery>) {
  const image = getImage(data.contentfulProduct?.photo?.gatsbyImage!);
  return (
    <Layout title="product">
      <div>
        <p>{data.contentfulProduct?.price}</p>
      </div>
      <GatsbyImage image={image!} alt="image" />
    </Layout>
  );
}

export const data = graphql`
  query productDetail($id: String) {
    contentfulProduct(id: { eq: $id }) {
      id
      price
      photo {
        gatsbyImage(height: 500)
      }
    }
  }
`;

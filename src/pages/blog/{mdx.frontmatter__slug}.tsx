import { graphql, PageProps } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
export default function BlogPost({ data }: PageProps<Queries.PostQueryQuery>) {
  const image = getImage(
    data.mdx?.frontmatter?.hero?.childImageSharp?.gatsbyImageData!
  );

  console.log(data);
  return (
    <Layout title="blog post">
      <GatsbyImage image={image!} alt={data.mdx?.frontmatter?.title!} />
      <h1>{data.mdx?.frontmatter?.title}</h1>
      <p>{data.mdx?.body}</p>
    </Layout>
  );
}

export const query = graphql`
  query PostQuery($frontmatter__slug: String) {
    mdx(frontmatter: { slug: { eq: $frontmatter__slug } }) {
      id
      body
      frontmatter {
        category
        date
        slug
        title
        hero {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export const head = ({ data }: PageProps<Queries.PostQueryQuery>) => (
  <SEO title={data.mdx?.frontmatter?.title + ''} />
);

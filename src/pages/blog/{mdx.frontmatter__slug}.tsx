import { graphql, PageProps } from 'gatsby';
import React from 'react';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
export default function BlogPost({ data }: PageProps<Queries.PostQueryQuery>) {
  console.log(data);
  return (
    <Layout title="blog post">
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
        slug
        title
        date
        category
      }
    }
  }
`;

export const head = ({ data }: PageProps<Queries.PostQueryQuery>) => (
  <SEO title={data.mdx?.frontmatter?.title + ''} />
);

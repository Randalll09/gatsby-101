import React from 'react';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import { graphql, PageProps, Link } from 'gatsby';

function Blog({ data }: PageProps<Queries.BlogTitleQuery>) {
  console.log(data);
  return (
    <Layout title="Blog">
      <h1> Hello</h1>
      <ul>
        {data.allMdx.nodes.map((post) => (
          <li key={post.frontmatter?.date + ''}>
            <Link to={`/blog/${post.frontmatter?.slug}`}>
              <p>{post.frontmatter?.title}</p>
            </Link>
            <span>{post.excerpt}</span>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
export const query = graphql`
  query BlogTitle {
    allMdx {
      nodes {
        frontmatter {
          category
          date
          title
          slug
        }
        excerpt(pruneLength: 32)
      }
    }
  }
`;

export function Head() {
  return <SEO title="blog" />;
}

export default Blog;

import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

interface ISEoProps {
  title: string;
}

export default function SEO({ title }: ISEoProps) {
  const data = useStaticQuery<Queries.SeoQueryQuery>(graphql`
    query SeoQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <title>
      {title} | {data.site?.siteMetadata?.title}
    </title>
  );
}

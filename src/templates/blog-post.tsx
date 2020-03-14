import React from "react";
import { graphql } from "gatsby";
import { BlogWrapper } from "../components/blog-wrapper";
import SEO from "../components/SEO";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <BlogWrapper>
      <SEO title={post.frontmatter.title}></SEO>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </BlogWrapper>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

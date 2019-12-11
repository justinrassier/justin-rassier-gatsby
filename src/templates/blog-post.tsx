import React from "react";
import { graphql } from "gatsby";
import { BlogWrapper } from "../components/blog-wrapper";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <BlogWrapper>
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

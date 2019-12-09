import React from "react";
import { graphql } from "gatsby";
import { Wrapper } from "../components/wrapper";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Wrapper>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Wrapper>
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

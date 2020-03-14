import React from "react";
import { graphql } from "gatsby";
import { BlogWrapper } from "../components/blog-wrapper";
import SEO from "../components/SEO";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <BlogWrapper headerImage={data.file.childImageSharp.fixed}>
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
    file(relativePath: { eq: "images/justin.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 80, height: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

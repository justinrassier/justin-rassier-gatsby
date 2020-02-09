import React from "react";
import { Link } from "gatsby";
import { Header } from "../components/header";
import { graphql } from "gatsby";
import { Wrapper } from "../components/wrapper";
import { PostItem } from "../components/post-item";

export default ({ data }) => {
  return (
    <Wrapper>
      <div className="min-h-screen sm:flex mt-16 mx-8">
        <div className="sm:w-1/2">
          <div className="flex items-center">
            <div className="bg-indigo-400 p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="inline-block h-6 w-6"
              >
                <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
            </div>
            <h2 className="font-semibold text-lg ml-2">About me</h2>
          </div>
          <p className="px-2 mt-3 ml-4">
            My name is Justin Rassier. I like coding. Sometimes my wife thinks
            I'm funny.
          </p>
        </div>
        <div className="sm:w-1/2 mt-8 sm:mt-0">
          <div className="flex items-center">
            <div className="bg-indigo-400 p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="inline-block h-6 w-6"
              >
                <path d="M6.3 12.3l10-10a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.4l-10 10a1 1 0 0 1-.7.3H7a1 1 0 0 1-1-1v-4a1 1 0 0 1 .3-.7zM8 16h2.59l9-9L17 4.41l-9 9V16zm10-2a1 1 0 0 1 2 0v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h6a1 1 0 0 1 0 2H4v14h14v-6z" />
              </svg>
            </div>
            <h2 className="font-semibold text-lg ml-2">Blog</h2>
          </div>

          <div className="flex flex-col">
            {data.allMarkdownRemark.totalCount === 0 && (
              <div className="mt-4 flex justify-center text-gray-700">
                <span>Coming Soon...I hope.</span>
              </div>
            )}
            {data.allMarkdownRemark.totalCount > 0 &&
              data.allMarkdownRemark.edges.map(({ node }) => (
                <PostItem
                  key={node.id}
                  slug={node.fields.slug}
                  date={node.frontmatter.date}
                  title={node.frontmatter.title}
                  // The title looks redundant when part of the excerpt. Simple hack to remove it for now
                  excerpt={node.excerpt.replace(node.frontmatter.title, "")}
                ></PostItem>
              ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;

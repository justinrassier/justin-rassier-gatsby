import React from "react";
import { Link } from "gatsby";
import { Header } from "../components/header";
import { graphql } from "gatsby";

export default ({ data }) => {
  return (
    <div className="bg-gray-200">
      <Header></Header>
      <div className="min-h-screen flex mt-16 mx-8">
        <div className="w-1/4">
          <div className="flex items-center">
            <div className="bg-indigo-400 p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="inline-block h-6 w-6"
              >
                <path
                  className="heroicon-ui"
                  d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                />
              </svg>
            </div>
            <h2 className="font-semibold text-lg ml-2">About me</h2>
          </div>
        </div>
        <div className="w-1/4">
          <div className="flex items-center">
            <div className="bg-indigo-400 p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="inline-block h-6 w-6"
              >
                <path
                  className="heroicon-ui"
                  d="M20.59 12l-3.3-3.3a1 1 0 1 1 1.42-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.42-1.4l3.3-3.3zM3.4 12l3.3 3.3a1 1 0 0 1-1.42 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.42 1.4L3.4 12zm7.56 8.24a1 1 0 0 1-1.94-.48l4-16a1 1 0 1 1 1.94.48l-4 16z"
                />
              </svg>
            </div>
            <h2 className="font-semibold text-lg ml-2">Resume</h2>
          </div>
        </div>
        <div className="w-1/4">
          <div className="flex items-center flex-wrap">
            <div className="bg-indigo-400 p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="inline-block h-6 w-6"
              >
                <path
                  className="heroicon-ui"
                  d="M6.3 12.3l10-10a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.4l-10 10a1 1 0 0 1-.7.3H7a1 1 0 0 1-1-1v-4a1 1 0 0 1 .3-.7zM8 16h2.59l9-9L17 4.41l-9 9V16zm10-2a1 1 0 0 1 2 0v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h6a1 1 0 0 1 0 2H4v14h14v-6z"
                />
              </svg>
            </div>
            <h2 className="font-semibold text-lg ml-2">
              Blog{" "}
              <span className="text-sm ml-1 text-gray-700">
                ({data.allMarkdownRemark.totalCount} Posts)
              </span>
            </h2>

            <div className="flex flex-col">
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <div className="px-2 m-2" key={node.id}>
                  <Link className="font-semibold" to={node.fields.slug}>
                    {node.frontmatter.title}{" "}
                    <span className="text-sm font-light text-gray-800">
                      — {node.frontmatter.date}{" "}
                      {node.frontmatter.tags.map(tag => (
                        <span className="bg-blue-800 text-gray-100 py-1 px-2 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </span>
                  </Link>
                  <p className="ml-2">{node.excerpt}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-1/4">
          <div className="flex items-center">
            <div className="bg-indigo-400 p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="inline-block h-6 w-6"
              >
                <path
                  className="heroicon-ui"
                  d="M19 6.41L8.7 16.71a1 1 0 1 1-1.4-1.42L17.58 5H14a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V6.41zM17 14a1 1 0 0 1 2 0v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h5a1 1 0 0 1 0 2H5v12h12v-5z"
                />
              </svg>
            </div>
            <h2 className="font-semibold text-lg ml-2">Links</h2>
          </div>
        </div>
      </div>
    </div>
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
            tags
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

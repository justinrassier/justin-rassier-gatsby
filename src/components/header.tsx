import React from "react";
import pic from "../../static/images/justin.jpg";
import { Link } from "gatsby";

export const Header = props => (
  <div className="flex justify-between items-center bg-gray-800 text-gray-200 h-16">
    <div>
      <Link to="/">
        <img
          src={pic}
          className="h-24 rounded-full absolute ml-4"
          alt="Justin Rassier"
        />
        <h1 className="text-2xl font-semibold tracking-wide inline-block ml-32">
          Justin Rassier
        </h1>
      </Link>
    </div>
    <div className="">
      <ul className="flex mr-4">
        <li className="px-2">
          <a href="https://www.twitter.com/justinrassier" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 400 400"
              width="24"
              height="24"
              className="fill-current"
            >
              <circle cx="200" cy="200" r="200" fill="currentColor" />
              <path
                d="M163.4 305.5c88.7 0 137.2-73.5 137.2-137.2 0-2.1 0-4.2-.1-6.2 9.4-6.8 17.6-15.3 24.1-25-8.6 3.8-17.9 6.4-27.7 7.6 10-6 17.6-15.4 21.2-26.7-9.3 5.5-19.6 9.5-30.6 11.7-8.8-9.4-21.3-15.2-35.2-15.2-26.6 0-48.2 21.6-48.2 48.2 0 3.8.4 7.5 1.3 11-40.1-2-75.6-21.2-99.4-50.4-4.1 7.1-6.5 15.4-6.5 24.2 0 16.7 8.5 31.5 21.5 40.1-7.9-.2-15.3-2.4-21.8-6v.6c0 23.4 16.6 42.8 38.7 47.3-4 1.1-8.3 1.7-12.7 1.7-3.1 0-6.1-.3-9.1-.9 6.1 19.2 23.9 33.1 45 33.5-16.5 12.9-37.3 20.6-59.9 20.6-3.9 0-7.7-.2-11.5-.7 21.1 13.8 46.5 21.8 73.7 21.8"
                className="text-gray-800"
              />
            </svg>
          </a>
        </li>
        <li className="px-2">
          <a href="https://www.github.com/justinrassier" target="_blank">
            <svg
              width="24"
              height="24"
              viewBox="0 0 16 16"
              version="1.1"
              aria-hidden="true"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
              ></path>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </div>
);

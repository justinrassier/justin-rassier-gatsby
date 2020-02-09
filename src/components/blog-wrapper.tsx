import React, { Children } from "react";
import { Header } from "./header";

export const BlogWrapper = props => (
  <div className="bg-gray-100">
    <Header headerImage={props.headerImage}></Header>
    <div className="min-h-screen flex mt-8 md:mt-16 mx-8 flex justify-center">
      <div className="max-w-sm md:max-w-4xl post  mb-16">{props.children}</div>
    </div>
  </div>
);

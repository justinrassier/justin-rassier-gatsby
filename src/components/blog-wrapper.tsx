import React, { Children } from "react";
import { Header } from "./header";

export const BlogWrapper = ({ children }) => (
  <div className="bg-gray-100">
    <Header></Header>
    <div className="min-h-screen flex mt-8 md:mt-16 mx-8 flex justify-center">
      <div className="max-w-sm md:max-w-4xl post  mb-16">{children}</div>
    </div>
  </div>
);

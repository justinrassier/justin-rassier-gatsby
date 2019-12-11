import React, { Children } from "react";
import { Header } from "./header";

export const BlogWrapper = ({ children }) => (
  <div className="bg-gray-100">
    <Header></Header>
    <div className="min-h-screen flex mt-16 mx-8 flex justify-center">
      <div className="max-w-2xl post">{children}</div>
    </div>
  </div>
);

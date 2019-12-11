import React, { Children } from "react";
import { Header } from "../components/header";

export const Wrapper = ({ children }) => (
  <div className="bg-gray-100">
    <Header></Header>
    <div>{children}</div>
  </div>
);

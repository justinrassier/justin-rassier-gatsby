import React, { Children } from "react";
import { Header } from "../components/header";

export const Wrapper = props => (
  <div className="bg-gray-100">
    <Header headerImage={props.headerImage}></Header>
    <div>{props.children}</div>
  </div>
);

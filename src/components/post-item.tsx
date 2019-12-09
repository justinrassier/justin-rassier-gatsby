import React from "react";
import { Link } from "gatsby";

export const PostItem = (props: {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
}) => (
  <div className="px-2 mt-2">
    <Link className="font-semibold" to={props.slug}>
      {props.title}{" "}
      <span className="text-sm font-light text-gray-800">— {props.date} </span>
    </Link>
    <p className="ml-2">{props.excerpt}</p>
  </div>
);

import React from "react";

export const AppLink = function<T>(props: { link: string; component: T }) {
  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      {props.component}
    </a>
  );
};

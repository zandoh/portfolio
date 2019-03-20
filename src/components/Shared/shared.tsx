import React from "react";

export const AppLink = function<T>(props: {
  link: string;
  component: T;
  className?: string;
}) {
  return (
    <a
      href={props.link}
      className={props.className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.component}
    </a>
  );
};

import React from "react";
import "./Sidebar.scss";
import { FaTwitter, FaGithub, FaRegEnvelope } from "react-icons/fa";

const Sidebar = () => {
  return (
    <section className="sidebar">
      <a
        className="icon"
        href="mailto:spamdoh9@gmail.com?subject=Email from zclabs.io"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaRegEnvelope />
      </a>
      <a
        className="icon"
        href="https://twitter.com/zandoh_"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter />
      </a>
      <a
        className="icon"
        href="https://github.com/zandoh"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
    </section>
  );
};

export default Sidebar;

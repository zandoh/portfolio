import React from "react";
import PropTypes from "prop-types";
import "./Header.scss";
import { Twitter, Github, Linkedin } from "styled-icons/fa-brands";
import { FilePdf } from "styled-icons/fa-solid";

const links = {
  github: "https://github.com/zandoh",
  twitter: "https://twitter.com/Zandoh_",
  linkedin: "https://www.linkedin.com/in/zrclark/",
  resume: "#"
};

class Header extends React.Component {
  render = () => {
    return (
      <div className="header-container">
        <h1 className="name" style={{ color: `${this.props.theme.fontColor}` }}>
          Zac Clark
        </h1>
        <div className="link-container">
          <a
            className="link"
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github style={{ color: `${this.props.theme.fontColor}` }} />
          </a>
          <a
            className="link"
            href={links.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter style={{ color: `${this.props.theme.fontColor}` }} />
          </a>
          <a
            className="link"
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin style={{ color: `${this.props.theme.fontColor}` }} />
          </a>
          <a
            className="link"
            href={links.resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FilePdf style={{ color: `${this.props.theme.fontColor}` }} />
          </a>
        </div>
      </div>
    );
  };
}

Header.propTypes = {
  theme: PropTypes.object
};

export default Header;

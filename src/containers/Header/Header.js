import React from "react";
import PropTypes from "prop-types";
import "./Header.scss";
import { Twitter, Github, Linkedin } from "styled-icons/fa-brands";

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
          Hey, I'm Zac Clark.
        </h1>
        <div className="link-container">
          <a
            className="link rubberBand"
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            title="Github"
          >
            <Github style={{ color: `${this.props.theme.fontColor}` }} />
          </a>
          <a
            className="link rubberBand"
            href={links.twitter}
            target="_blank"
            rel="noopener noreferrer"
            title="Twitter"
          >
            <Twitter style={{ color: `${this.props.theme.fontColor}` }} />
          </a>
          <a
            className="link rubberBand"
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            title="Linkedin"
          >
            <Linkedin style={{ color: `${this.props.theme.fontColor}` }} />
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

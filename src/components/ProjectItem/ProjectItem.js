import React from "react";
import PropTypes from "prop-types";
import "./ProjectItem.scss";
import ReactMarkdown from "react-markdown";

class Project extends React.Component {
  constructor(props) {
    super(props);
    console.log("Project props ", props);
  }

  render = () => {
    const {
      title,
      techStack,
      url,
      sortOrder,
      image,
      description
    } = this.props.fields;
    return (
      <div
        className="project-container"
        style={{
          borderColor: `${this.props.theme.fontColor}`
        }}
      >
        <h2
          className="title"
          style={{
            color: `${this.props.theme.fontColor}`
          }}
        >
          {title}
        </h2>
        <p
          className="description"
          style={{
            color: `${this.props.theme.fontColor}`
          }}
        >
          <ReactMarkdown source={description} />
        </p>
        {techStack && (
          <React.Fragment>
            <p>Built with: </p>
            <ul>
              {techStack.map((tech, i) => (
                <li>{tech}</li>
              ))}
            </ul>
          </React.Fragment>
        )}
        {url && (
          <a
            className="link"
            style={{
              color: `${this.props.theme.fontColor}`
            }}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Project
          </a>
        )}
      </div>
    );
  };
}

Project.propTypes = {
  fields: PropTypes.object,
  id: PropTypes.number
};

export default Project;

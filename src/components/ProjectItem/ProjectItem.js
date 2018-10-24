import React from "react";
import PropTypes from "prop-types";

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
      <div className="project-container">
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={url} target="_blank" rel="noopener noreferrer">
          Link
        </a>
      </div>
    );
  };
}

Project.propTypes = {
  fields: PropTypes.object,
  id: PropTypes.number
};

export default Project;

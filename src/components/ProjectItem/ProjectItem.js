import React from "react";
import PropTypes from "prop-types";

class Project extends React.Component {
  constructor(props) {
    super(props);
    console.log("Project props ", props);
  }

  render = () => {
    return <React.Fragment>{this.props.fields.title}</React.Fragment>;
  };
}

Project.propTypes = {
  fields: PropTypes.object,
  id: PropTypes.number
};

export default Project;

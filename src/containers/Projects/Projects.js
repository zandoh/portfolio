import React from "react";
import PropTypes from "prop-types";
import "./Projects.scss";
import * as contentful from "contentful";
import Project from "../../components/ProjectItem/ProjectItem";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };

    this.client = contentful.createClient({
      space: "2i2w9wxt7asr",
      accessToken:
        "bc65cc0cc8cb2908e69dc2b4485c58021e5c80a04a90f38781361a0e59455b8e"
    });
  }

  componentDidMount = () => {
    this.fetchProjects().then(this.setProjects);
  };

  fetchProjects = () => {
    return this.client.getEntries();
  };

  setProjects = response => {
    const projects = [...response.items];

    projects.sort((a, b) => {
      let aSort = a.fields.sortOrder === undefined ? -1 : a.fields.sortOrder;
      let bSort = b.fields.sortOrder === undefined ? -1 : b.fields.sortOrder;
      return bSort - aSort;
    });

    this.setState({
      projects: projects
    });
  };

  render = () => {
    return (
      <React.Fragment>
        {this.state.projects.map((project, index) => {
          return <Project fields={project.fields} key={`project-${index}`} />;
        })}
      </React.Fragment>
    );
  };
}

Projects.propTypes = {
  theme: PropTypes.object
};

export default Projects;

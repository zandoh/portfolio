import React, { Component } from "react";
import { Link } from "react-router-dom";
import Typed from "react-typed";
import ContentfulClient from "../../contentful";
import injectSheet from "react-jss";
import styles from "./listStyles";

class List extends Component {
  typistWords = [
    "Front-End",
    "Back-End",
    "Internet of Things",
    "Web Applications"
  ];
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }

  async componentWillMount() {
    const projects = await ContentfulClient.instance.getEntries();
    this.setState({
      projects: projects.items
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <h2>Projects</h2>
        <div className={classes.typistContainer}>
          Developing projects pertaining to{" "}
          <Typed
            className={`${classes.typist} dark`}
            strings={this.typistWords}
            typeSpeed={40}
            backSpeed={50}
            smartBackspace
            loop
          >
            <span />
          </Typed>
        </div>
        {this.state.projects.map((project, index) => {
          return (
            <Link
              to={{
                pathname: `${project.fields.link}`,
                state: { fields: project.fields }
              }}
              key={`link-${index}`}
            >
              {project.fields.title}
            </Link>
          );
        })}
      </React.Fragment>
    );
  }
}

export default injectSheet(styles)(List);

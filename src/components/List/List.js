import React, { Component } from "react";
import { Link } from "react-router-dom";
import Typist from "react-typist";
import Detail from "../Detail/Detail";
import ContentfulClient from "../../contentful";
import injectSheet from "react-jss";
import styles from "./listStyles";

class List extends Component {
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
    const typistWords = [
      "Front-End",
      "Back-End",
      "Internet of Things",
      "Web Applications"
    ];
    const typistList = typistWords.map((word, index) => {
      return index < typistWords.length - 1 ? (
        <span key={`typist-item-${index}`}>
          {word}
          <Typist.Backspace
            count={word.length}
            delay={500}
            style={{ marginLeft: "1px" }}
          />
        </span>
      ) : (
        <span key={`typist-item-${index}`}>{word}</span>
      );
    });
    console.log("projects ", this.state.projects);
    return (
      <React.Fragment>
        <h2>Projects</h2>
        <div className={classes.typistContainer}>
          Developing projects pertaining to{" "}
          <Typist className={`${classes.typist} dark`}>{typistList}</Typist>
        </div>
        {this.state.projects.map((project, index) => {
          return (
            <Link to={`${project.fields.link}`} key={`link-${index}`}>
              <Detail fields={project.fields} key={`detail-${index}`} />
            </Link>
          );
        })}
      </React.Fragment>
    );
  }
}

export default injectSheet(styles)(List);

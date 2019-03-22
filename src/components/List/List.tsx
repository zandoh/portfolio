import React, { Component } from "react";
import { Link } from "react-router-dom";
import Typed from "react-typed";
import ContentfulClient from "../../contentful";
import withStyles from "react-jss";
import styles, { ListStyles } from "./listStyles";
import { IProject } from "../../models";

interface ListProps {
  projects: IProject[];
  classes: ListStyles;
}

interface ListState {
  projects: IProject[];
}

class List extends Component<ListProps, ListState> {
  typistWords: string[] = [
    "Front-End",
    "Back-End",
    "Internet of Things",
    "Web Applications"
  ];
  constructor(props: ListProps) {
    super(props);
    this.state = {
      projects: []
    };
  }

  async componentWillMount() {
    const projects = await ContentfulClient.getInstance().getEntries();
    const projectArr: IProject[] = projects.items.map(project => {
      return project.fields as IProject;
    });
    this.setState({
      projects: projectArr
    });
  }

  render() {
    const { classes } = this.props;
    const typed = (
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
    );

    return (
      <React.Fragment>
        <h2 className={classes.title}>Projects</h2>
        <div className={classes.typistContainer}>
          Developing projects pertaining to {typed}
        </div>
        <div className={classes.projectContainer}>
          {this.state.projects.map((project: IProject, index: number) => {
            return (
              <Link
                to={{
                  pathname: `${project.link}`,
                  state: { fields: project }
                }}
                key={`link-${index}`}
                className={classes.project}
              >
                <h3 className={classes.projectTitle}>{project.title}</h3>
                <span>{project.descriptionShort}</span>
              </Link>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(List);

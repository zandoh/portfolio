import React, { Component } from "react";
import { Link } from "react-router-dom";
import Typed from "react-typed";
import ContentfulClient from "../../contentful";
import withStyles from "react-jss";
import styles, { ListStyles } from "./listStyles";
import { Project } from "../../models";

interface ListProps {
  projects: Project[];
  classes: ListStyles;
}

interface ListState {
  projects: Project[];
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
    const projectArr: Project[] = projects.items.map(project => {
      return project.fields as Project;
    });
    this.setState({
      projects: projectArr
    });
  }

  render() {
    const { classes } = this.props;
    const typed = (
      //@ts-ignore
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
        <h2>Projects</h2>
        <div className={classes.typistContainer}>
          Developing projects pertaining to {typed}
        </div>
        {this.state.projects.map((project: any, index: number) => {
          return (
            <Link
              to={{
                pathname: `${project.link}`,
                state: { fields: project }
              }}
              key={`link-${index}`}
            >
              {project.title}
            </Link>
          );
        })}
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(List);

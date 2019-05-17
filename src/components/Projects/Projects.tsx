import React, { Component } from "react";
import injectSheet from "react-jss";
import styles, { ProjectsClasses } from "./projectsStyles";
import { AppTheme } from "../../rootTheme";
import { AppLink } from "../AppLink/AppLink";

interface ProjectsProps {
  classes: ProjectsClasses;
  theme: AppTheme;
}

interface ProjectsState {}

class Projects extends Component<ProjectsProps, ProjectsState> {
  render() {
    const { classes, theme } = this.props;
    const gitHub = "https://github.com/zandoh";
    return (
      <section className={classes.projectsContainer}>
        <h1 className={classes.title}>Projects.</h1>
        <p className={classes.description}>
          Please check some of mine recent projects below. More projects and
          works can be found on my <AppLink link={gitHub} component="GitHub" />
        </p>
        <div className={classes.listImageWrapper}>
          <div className={classes.listContainer}>
            <article className={classes.listArticle}>
              <AppLink
                link={""}
                className={classes.listLink}
                component={<h2>One</h2>}
              />
            </article>
            <article className={classes.listArticle}>
              <AppLink
                link={""}
                className={classes.listLink}
                component={<h2>Two</h2>}
              />
            </article>
            <article className={classes.listArticle}>
              <AppLink
                link={""}
                className={classes.listLink}
                component={<h2>Three</h2>}
              />
            </article>
            <article className={classes.listArticle}>
              <AppLink
                link={""}
                className={classes.listLink}
                component={<h2>Four</h2>}
              />
            </article>
          </div>
          <div className={classes.imageContainer}>
            <aside>
              <h1>1</h1>
              <h1>2</h1>
              <h1>3</h1>
              <h1>4</h1>
            </aside>
          </div>
        </div>
      </section>
    );
  }
}

export default injectSheet(styles)(Projects);

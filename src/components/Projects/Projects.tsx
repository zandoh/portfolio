import React, { Component } from "react";
import injectSheet from "react-jss";
import styles, { ProjectsClasses } from "./projectsStyles";
import { AppTheme } from "../../rootTheme";
import { AppLink } from "../AppLink/AppLink";
import { IProject } from "../../models";
import ProjectImage from "../ProjectImage/ProjectImage";
import portfolioImage from "../../assets/portfolio.jpg";
import wowImage from "../../assets/wow.jpg";
import quotrImage from "../../assets/quote.jpg";

interface ProjectsProps {
  classes: ProjectsClasses;
  theme: AppTheme;
}

interface ProjectsState {
  projectImage: string; // 510 x 720 recommended
  projectAlt: string;
  isHovering: boolean;
  hideProjectImage: boolean;
}

class Projects extends Component<ProjectsProps, ProjectsState> {
  constructor(props) {
    super(props);
    this.state = {
      projectImage: "",
      projectAlt: "",
      isHovering: false,
      hideProjectImage: false
    };
  }

  componentDidMount = () => {
    window.addEventListener("resize", this.resize);
    this.resize();
  };

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.resize);
  };

  resize = () => {
    const hideProjectImage = window.innerWidth <= 991;
    if (hideProjectImage !== this.state.hideProjectImage) {
      this.setState({
        hideProjectImage: hideProjectImage
      });
    }
  };

  handleMouseHover = (project: IProject) => {
    this.setState({
      isHovering: true,
      projectImage: project.imagePath,
      projectAlt: project.imageAlt
    });
  };

  render() {
    const { classes, theme } = this.props;
    const gitHub = "https://github.com/zandoh";
    const projects: IProject[] = [
      {
        title: "Personal portfolio",
        link: "https://github.com/zandoh/portfolio",
        imagePath: portfolioImage,
        imageAlt:
          "Stock image of a MacBook pro on a desk with a lamp. A window looks out to a city with the sunset in the background"
      },
      {
        title: "WoW character search",
        link: "https://github.com/zandoh/blizz",
        imagePath: wowImage,
        imageAlt:
          "Stock image of a human hand with a sparkler giving the illusion of magic"
      },
      {
        title: "Quotr extension",
        link: "https://github.com/zandoh/Quotr",
        imagePath: quotrImage,
        imageAlt:
          "Stock image with a calendar during the month of september. Quote for that month is like is short. Do stuff that matters"
      }
    ];

    return (
      <section className={classes.projectsContainer}>
        <h1 className={classes.title}>Projects.</h1>
        <p className={classes.description}>
          Feel free to check some of my recent projects below. More can be found
          on my <AppLink link={gitHub} child="GitHub" />.
        </p>
        <div className={classes.listImageWrapper}>
          <div className={classes.listContainer}>
            {projects.map((project, index) => {
              return (
                <article
                  key={`project-${index}`}
                  className={classes.listArticle}
                >
                  <AppLink
                    link={project.link}
                    className={classes.listLink}
                    child={
                      <h2
                        onMouseEnter={() => this.handleMouseHover(project)}
                        onClick={() => this.handleMouseHover(project)}
                      >
                        {project.title}
                      </h2>
                    }
                  />
                </article>
              );
            })}
          </div>
          <div className={classes.imageContainer}>
            {!this.state.hideProjectImage && (
              <aside className={classes.projectImage}>
                {this.state.isHovering && (
                  <ProjectImage
                    imageSrc={this.state.projectImage}
                    altText={this.state.projectAlt}
                  />
                )}
              </aside>
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default injectSheet(styles)(Projects);

import React, { useEffect, useState } from "react";
import { AppLink } from "../AppLink/AppLink";
import { IProject } from "../../models";
import ProjectImage from "../ProjectImage/ProjectImage";
import portfolioImage from "../../assets/portfolio.jpg";
import wowImage from "../../assets/wow.jpg";
import quotrImage from "../../assets/quote.jpg";

const Projects: React.FC<{}> = () => {
  const [projectImage, setProjectImage] = useState("");
  const [projectAlt, setProjectAlt] = useState("");
  const [isHovering, setIsHovering] = useState(false);
  const [hideProjectImage, setHideProjectImage] = useState(false);
  const handleMouseHover = (project: IProject) => {
    setIsHovering(true);
    setProjectImage(project.imagePath);
    setProjectAlt(project.imageAlt);
  };

  useEffect(() => {
    setHideProjectImage(window?.innerWidth <= 991);
  }, []);

  const classes: any = {};
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
        on my <AppLink link={gitHub} title={"GitHub Profile"} child="GitHub" />.
      </p>
      <div className={classes.listImageWrapper}>
        <div className={classes.listContainer}>
          {projects.map((project, index) => {
            return (
              <article key={`project-${index}`} className={classes.listArticle}>
                <AppLink
                  link={project.link}
                  title={project.title}
                  className={classes.listLink}
                  child={
                    <h2
                      onMouseEnter={() => handleMouseHover(project)}
                      onClick={() => handleMouseHover(project)}
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
          {!hideProjectImage && (
            <aside className={classes.projectImage}>
              {isHovering && (
                <ProjectImage imageSrc={projectImage} altText={projectAlt} />
              )}
            </aside>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;

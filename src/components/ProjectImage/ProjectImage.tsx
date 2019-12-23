import React from "react";

interface ProjectImageProps {
  imageSrc: string;
  altText: string;
}

const ProjectImage: React.FC<ProjectImageProps> = ({ imageSrc, altText }) => {
  return <img src={imageSrc} alt={altText} />;
};

export default ProjectImage;

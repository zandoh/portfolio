import React, { Component } from "react";

interface ProjectImageProps {
  imageSrc: string;
  altText: string;
}

class ProjectImage extends Component<ProjectImageProps, {}> {
  render() {
    return <img src={this.props.imageSrc} alt={this.props.altText} />;
  }
}

export default ProjectImage;

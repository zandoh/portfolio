import React, { Component } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Project } from "../../models";

interface DetailProps extends RouteComponentProps {}

interface DetailState {
  details: Project;
}

class Detail extends Component<DetailProps, DetailState> {
  constructor(props: DetailProps) {
    super(props);
    this.state = {
      details: {
        description: "",
        link: "",
        techStack: [],
        title: "",
        url: ""
      }
    };
    // `https://api.github.com/repos/zandoh/${repoName}/commits`
  }

  static getDerivedStateFromProps(props: DetailProps, state: DetailState) {
    if (props.location.state.fields !== state.details) {
      return {
        details: props.location.state.fields
      };
    }
    return null;
  }

  render() {
    const { title } = this.state.details;
    return <h1>hiiii {title}</h1>;
  }
}

export default Detail;

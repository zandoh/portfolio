import React, { Component } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { IProject, ICommitFromGithub } from "../../models";
import Commit from "../Commit/Commit";
import withStyles from "react-jss";
import styles, { DetailStyles } from "./detailStyles";
import { ReactComponent as IconX } from "../../assets/x.svg";

interface DetailProps extends RouteComponentProps {
  classes: DetailStyles;
}

interface DetailState {
  details: IProject;
  githubHistoryLoaded: boolean;
  githubHistory: ICommitFromGithub[];
  githubError: boolean;
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
        url: "",
        repoName: ""
      },
      githubHistoryLoaded: false,
      githubHistory: [],
      githubError: false
    };
  }

  static getDerivedStateFromProps(props: DetailProps, state: DetailState) {
    if (props.location.state.fields !== state.details) {
      return {
        details: props.location.state.fields
      };
    }
    return null;
  }

  componentDidMount() {
    const url = `https://api.github.com/repos/zandoh/${
      this.state.details.repoName
    }/commits`;
    fetch(url)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            githubHistoryLoaded: true,
            githubHistory: result
          });
        },
        error => {
          this.setState({
            githubHistoryLoaded: true,
            githubError: true
          });
        }
      );
  }

  navigateBack = () => {
    this.props.history.push("/");
  };

  render() {
    const { title } = this.state.details;
    const { classes } = this.props;
    let githubContent: React.ReactNode;
    if (this.state.githubError) {
      githubContent = (
        <React.Fragment>
          <div>Error: Couldn't communicate with GitHub</div>
        </React.Fragment>
      );
    } else if (!this.state.githubHistoryLoaded) {
      githubContent = (
        <React.Fragment>
          <div>Loading...</div>
        </React.Fragment>
      );
    } else {
      githubContent = this.state.githubHistory.map(
        (commit: ICommitFromGithub, index: number) => {
          return (
            <Commit
              key={`commit-${index}`}
              commit={commit.commit}
              committerProfile={commit.committer}
              url={commit.url}
            />
          );
        }
      );
    }
    return (
      <div className={classes.detailContainer}>
        <IconX height={"25px"} width={"25px"} onClick={this.navigateBack} />
        <h1>{title}</h1>
        {githubContent}
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(Detail));

import React, { Component } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { IProject, ICommitFromGithub } from "../../models";
import Commit from "../Commit/Commit";
import withStyles from "react-jss";
import styles, { DetailStyles } from "./detailStyles";
import { ReactComponent as IconX } from "../../assets/x.svg";
// @ts-ignore
import ReactMarkdown from "react-markdown"; // no types
import { ReactComponent as IconLoading } from "../../assets/loading.svg";

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
    const { title, description, techStack, url } = this.state.details;
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
          <IconLoading className={classes.iconLoading} />
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
        <IconX
          height={"25px"}
          width={"25px"}
          color={"black"}
          onClick={this.navigateBack}
          className={classes.iconX}
        />
        <h1>{title}</h1>
        <ReactMarkdown source={description} escapeHtml={false} />
        {url && (
          <a href={url} target="_blank" rel="noopener noreferrer">
            Demo
          </a>
        )}
        <br />
        <h2>Commit History</h2>
        {githubContent}
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(Detail));

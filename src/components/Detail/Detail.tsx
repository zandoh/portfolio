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
import { AppLink } from "../Shared/shared";
import { Animated } from "react-animated-css";

interface DetailProps extends RouteComponentProps {
  classes: DetailStyles;
}

interface DetailState {
  details: IProject;
  githubHistoryLoaded: boolean;
  githubHistory: ICommitFromGithub[];
  githubError: boolean;
  open: boolean;
}

const animationTimeout = 450;

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
      githubError: false,
      open: true
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
          setTimeout(() => {
            this.setState({
              githubHistoryLoaded: true,
              githubHistory: result
            });
          }, animationTimeout);
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
    this.setState({
      open: false
    });
    setTimeout(() => {
      this.props.history.push("/");
    }, animationTimeout);
  };

  getJSXByState = (): React.ReactNode => {
    if (this.state.githubError) {
      return (
        <React.Fragment>
          <div>Error: Couldn't communicate with GitHub</div>
        </React.Fragment>
      );
    } else if (!this.state.githubHistoryLoaded) {
      return (
        <Animated
          animationIn="fadeIn"
          animationOut="fadeOut"
          animationInDuration={animationTimeout}
          animationOutDuration={animationTimeout}
          isVisible={!this.state.githubHistoryLoaded}
        >
          <IconLoading className={this.props.classes.iconLoading} />
        </Animated>
      );
    } else {
      return (
        <Animated
          animationIn="fadeIn"
          animationOut="fadeOut"
          animationInDuration={animationTimeout}
          animationOutDuration={animationTimeout}
          isVisible={this.state.githubHistoryLoaded}
        >
          {this.state.githubHistory.map(
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
          )}
        </Animated>
      );
    }
  };

  render() {
    const { title, description, url } = this.state.details;
    const { classes } = this.props;
    const githubContent = this.getJSXByState();
    return (
      <Animated
        animationIn="fadeIn"
        animationOut="fadeOut"
        animationInDuration={animationTimeout}
        animationOutDuration={animationTimeout}
        isVisible={this.state.open}
        className={classes.detailContainer}
      >
        <IconX
          height={"25px"}
          width={"25px"}
          color={"black"}
          onClick={this.navigateBack}
          className={classes.iconX}
        />
        <h1>{title}</h1>
        <ReactMarkdown source={description} escapeHtml={false} />
        {url && <AppLink link={url} component="Demo" />}
        <br />
        <h2>Commit History</h2>
        {githubContent}
      </Animated>
    );
  }
}

export default withRouter(withStyles(styles)(Detail));

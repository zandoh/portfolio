import React, { Component } from "react";
import { ICommit, IGithubUser } from "../../models";
import withStyles from "react-jss";
import styles, { CommitStyles } from "./commitStyles";
//@ts-ignore
import * as defaultImage from "../../assets/default_github.png";

interface CommitProps {
  commit: ICommit;
  committerProfile: IGithubUser;
  url: string;
  classes: CommitStyles;
}

class Commit extends Component<CommitProps, {}> {
  constructor(props: CommitProps) {
    super(props);
  }

  render() {
    const { committerProfile, classes } = this.props;
    const { message, committer } = this.props.commit;
    const imgSrc = committerProfile
      ? committerProfile.avatar_url
      : String(defaultImage);
    return (
      <div className={classes.commitContainer}>
        <img src={imgSrc} className={classes.img} />
        <div className={classes.messageContainer}>
          {committer && committer.name !== "=" && <span>{committer.name}</span>}
          {message && <span>{message}</span>}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Commit);

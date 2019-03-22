import React, { Component } from "react";
import { ICommit, IGithubUser } from "../../models";
import withStyles from "react-jss";
import styles, { CommitStyles } from "./commitStyles";

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
    return (
      <div className={classes.commitContainer}>
        {committerProfile && (
          <img src={committerProfile.avatar_url} className={classes.img} />
        )}
        <div className={classes.messageContainer}>
          {committer && committer.name !== "=" && <span>{committer.name}</span>}
          {message && <span>{message}</span>}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Commit);

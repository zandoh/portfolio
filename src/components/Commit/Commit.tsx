import React, { Component } from "react";
import { ICommit, IGithubUser } from "../../models";

interface CommitProps {
  commit: ICommit;
  committerProfile: IGithubUser;
  url: string;
}

class Commit extends Component<CommitProps, {}> {
  constructor(props: CommitProps) {
    super(props);
  }

  render() {
    const { committerProfile } = this.props;
    const { message, committer } = this.props.commit;
    return (
      <React.Fragment>
        {committer && committer.name !== "=" && (
          <React.Fragment>
            <p>User: {committer.name}</p>
          </React.Fragment>
        )}
        {committerProfile && (
          <React.Fragment>
            <img src={committerProfile.avatar_url} />
          </React.Fragment>
        )}
        {message && <React.Fragment>Commit message: {message}</React.Fragment>}
      </React.Fragment>
    );
  }
}

export default Commit;

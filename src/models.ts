export interface IProject {
  description: string; // project description
  descriptionShort?: string; // project short description
  image?: {
    fields: {
      title: string; // image caption
    };
    file: {
      url: string; // image url
      details: {
        fileName: string; // image name, for alt text
      };
    };
  };
  link: string; // react-router link
  techStack: string[]; // technologies used to build project
  title: string; // project title
  url: string; // browser url
  repoName: string; // github repo name
  sortOrder?: number;
}

export interface IGithubUser {
  avatar_url: string; // image link
  html_url: string; // profile link
  login: string; // username
}
export interface ICommit {
  committer: {
    name: string; // github users display name
    date: string; // date in UTC
  };
  message: string;
}

export interface ICommitFromGithub {
  commit: ICommit;
  committer: IGithubUser;
  url: string; // link to github for this commit
}

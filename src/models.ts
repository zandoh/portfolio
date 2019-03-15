export interface Project {
  description: string;
  image?: {
    fields: {
      title: string;
    };
    file: {
      url: string;
      details: {
        fileName: string;
      };
    };
  };
  link: string;
  techStack: string[];
  title: string;
  url: string;
}

import { createClient, ContentfulClientApi } from "contentful";

class ContentfulClient {
  static accessToken: string = `${process.env.REACT_APP_CONTENTFUL_TOKEN}`;
  static space: string = `${process.env.REACT_APP_CONTENTFUL_SPACE}`;
  static client: ContentfulClientApi;

  static createInstance(): void {
    this.client = createClient({
      space: this.space,
      accessToken: this.accessToken,
      host: "cdn.contentful.com"
    });
  }

  static getInstance(): ContentfulClientApi {
    if (!this.client) {
      this.createInstance();
    }
    return this.client;
  }
}

export default ContentfulClient;

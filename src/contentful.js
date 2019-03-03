import { createClient } from "contentful";

const ContentfulClient = {
  accessToken:
    "bc65cc0cc8cb2908e69dc2b4485c58021e5c80a04a90f38781361a0e59455b8e",
  space: "2i2w9wxt7asr",
  client: null,
  get instance() {
    if (!this.client) {
      this.client = createClient({
        space: this.space,
        accessToken: this.accessToken,
        host: "cdn.contentful.com"
      });
    }
    return this.client;
  }
};

export default ContentfulClient;

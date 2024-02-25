import { Client, Databases } from "../../client/node_modules/appwrite/types";
// import conf from "../conf/conf";

const conf = {
  appwriteUrl: process.env.REACT_APP_APPWRITE_URL,
  appwriteProjectId: process.env.REACT_APP_APPWRITE_PROJECT_ID,
  appwriteDatabaseId: process.env.REACT_APP_APPWRITE_DATABASE_ID,
  appwriteCollectionId: process.env.REACT_APP_APPWRITE_PROJECT_ID,
};

class Service {
  client = new Client();
  databases;

  constructor() {
    this.client
      .setEndpoint("https://cloud.appwrite.io/v1")
      .setProject("658eb0e7b27d4908ffbd");
    this.databases = new Databases(this.client);
  }

  async createDocument(documentId, { document, userId }) {
    try {
      this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        documentId,
        { document, userId }
      );
    } catch (err) {
      throw err;
    }
  }
}

const service = new Service();
export default service;

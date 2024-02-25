import { Account, Client, ID, Databases } from "appwrite";
import conf from "../conf/conf";

class AuthService {
  client = new Client();
  account;
  databases;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
    this.databases = new Databases(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      //   logging in automatically after creating a new account
      if (userAccount) {
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (err) {
      throw err;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (err) {
      throw err;
    }
  }

  async getCurrentUser() {
    try {
      await this.account.get();
    } catch (err) {
      throw err;
    }

    // if no user got
    return null;
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (err) {
      throw err;
    }
  }
}

const authService = new AuthService();
export default authService;

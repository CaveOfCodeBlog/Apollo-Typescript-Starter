import * as bodyParser from "body-parser";
import * as express from "express";

import { ApolloServer } from "./apollo";

export class Server {
  /**
   * Express server instance.
   */
  public expressServer: express.Express;

  /**
   * Server entry point.
   */
  constructor() {
    this.expressServer = express();
    this.setupMiddleware();

    const graphqlServer = new ApolloServer(this.expressServer, 8080);
  }

  private setupMiddleware(): void {
    this.expressServer.use(bodyParser.urlencoded({ extended: true }));
    this.expressServer.use(bodyParser.json());
  }
}

export const server = new Server().expressServer;

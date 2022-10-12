import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import http, { createServer as httpCreateServer } from "http";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { WebSocketServer } from "ws";
import { useServer } from "graphql-ws/lib/use/ws";

import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";

const GRAPH_QL_PATH = "/";

export const createServer = async () => {
  // requirements for the express version of the server
  const app = express();
  const httpServer = http.createServer(app);
  // requirements websocket version of the server
  const schema = makeExecutableSchema({ typeDefs, resolvers });

  // instantiate the websocket apollo server
  const wsServer = new WebSocketServer({
    server: httpServer,
    path: GRAPH_QL_PATH,
  });
  const wsServerCleanup = useServer({ schema }, wsServer);

  // instantiate the express apollo server
  const server = new ApolloServer({
    schema,
    csrfPrevention: true,
    cache: "bounded",
    resolvers,
    plugins: [
      // properly shutdown the http express server when api terminates
      ApolloServerPluginDrainHttpServer({ httpServer }),
      // properly shutdown the ws server when api terminates
      {
        async serverWillStart() {
          return {
            async drainServer() {
              await wsServerCleanup.dispose();
            },
          };
        },
      },
    ],
  });

  await server.start();

  server.applyMiddleware({
    app,
    path: GRAPH_QL_PATH,
  });

  return {
    server: httpServer,
    apolloServer: server,
  };
};

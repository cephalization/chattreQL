import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import http from "http";

import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";

export const createServer = async () => {
  const app = express();
  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    typeDefs,
    csrfPrevention: true,
    cache: "bounded",
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();

  server.applyMiddleware({
    app,
    path: "/",
  });

  return {
    server: httpServer,
    apolloServer: server,
  };
};

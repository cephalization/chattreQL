import { ApolloServer } from "apollo-server";

import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";

export const createServer = () => {
  const server = new ApolloServer({
    typeDefs,
    csrfPrevention: true,
    cache: "bounded",
    resolvers,
  });

  return server;
};

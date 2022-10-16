import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { getMainDefinition } from "@apollo/client/utilities";
import { ApolloClient, HttpLink, InMemoryCache, split } from "@apollo/client";

export const createApolloClient = (url: string, wsUrl: string) => {
  // create a link for normal http queries
  const httpLink = new HttpLink({
    uri: url,
  });

  // create a link for websocket subscriptions
  const wsLink = new GraphQLWsLink(
    createClient({
      url: wsUrl,
      // authenticate the websocket connection eventually
      // connectionParams: {
      //   authToken: user.authToken,
      // },
    })
  );

  // Based on the query coming over the client, determine
  // which url to send it off to
  const splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === "OperationDefinition" &&
        definition.operation === "subscription"
      );
    },
    wsLink,
    httpLink
  );

  const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
  });

  return client;
};

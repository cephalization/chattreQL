import { gql } from "apollo-server";

export const typeDefs = gql`
  type Message {
    content: String
    author: String
  }

  type Query {
    messages: [Message]
  }
`;

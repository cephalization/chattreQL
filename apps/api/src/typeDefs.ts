import { gql } from "apollo-server";

export const typeDefs = gql`
  type Message {
    id: ID!
    content: String
    author: User!
  }

  type User {
    id: ID!
    name: String
    messages: [Message]
  }

  type Query {
    messages(id: ID, userId: ID): [Message]
    users(id: ID): [User]
  }
`;

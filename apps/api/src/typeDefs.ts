import { gql } from "apollo-server-express";

export type User = {
  id: string;
  name: string;
  messages: Message[];
};

export type Message = {
  id: string;
  content: string;
  author: User;
};

export const typeDefs = gql`
  type Message {
    id: ID!
    content: String!
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

  type Mutation {
    createMessage(author: ID!, content: String!): Message
    removeMessage(id: ID!): Message
  }
`;

import { gql } from "apollo-server-express";

export const typeDefs = gql`
  interface Message {
    id: ID!
    content: String!
  }

  type MessageBase implements Message {
    id: ID!
    content: String!
  }

  type MessageFull implements Message {
    id: ID!
    content: String!
    author: UserFull!
  }

  interface User {
    id: ID!
    name: String
  }

  type UserFull implements User {
    id: ID!
    name: String
    messages: [MessageFull]
  }

  type Query {
    messages(id: ID, userId: ID): [MessageFull]
    users(id: ID): [UserFull]
  }

  type Mutation {
    createMessage(author: ID!, content: String!): MessageBase
    removeMessage(id: ID!): MessageBase
  }
`;

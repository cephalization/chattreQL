import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query UserQuery {
    users {
      id
      name
    }
  }
`;

export const GET_MESSAGES = gql`
  query MessageQuery {
    messages {
      id
      content
      author {
        name
      }
    }
  }
`;

export const CREATE_MESSAGE = gql`
  mutation CreateMessage($author: ID!, $content: String!) {
    createMessage(author: $author, content: $content) {
      id
    }
  }
`;

export const SUBSCRIBE_GET_MESSAGES = gql`
  subscription MessageSubscription {
    messageCreated {
      id
      content
      author {
        name
      }
    }
  }
`;

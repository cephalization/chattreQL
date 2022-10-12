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

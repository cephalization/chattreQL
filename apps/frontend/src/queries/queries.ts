import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query UserQuery {
    users {
      id
      name
    }
  }
`;

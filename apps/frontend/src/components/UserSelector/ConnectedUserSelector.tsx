import { useQuery } from "@apollo/client";
import * as React from "react";

import { GET_USERS } from "graphql-queries";
import UserSelector, { type UserSelectorProps } from "./UserSelector";

const ConnectedUserSelector = (props: Omit<UserSelectorProps, "users">) => {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) {
    return (
      <select>
        <option disabled>Loading...</option>
      </select>
    );
  }

  if (error) {
    return (
      <p>
        <>Error: {error}</>
      </p>
    );
  }

  return <UserSelector users={data.users} {...props} />;
};

export default ConnectedUserSelector;

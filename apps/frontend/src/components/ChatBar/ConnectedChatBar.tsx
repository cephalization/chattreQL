import { useMutation, useQuery } from "@apollo/client";
import * as React from "react";
import { CREATE_MESSAGE, GET_USER } from "graphql-queries";
import ChatBar, { type ChatBarProps } from "./ChatBar";

type ConnectedChatBarProps = Omit<
  ChatBarProps,
  "onSubmit" | "loading" | "error"
> & {
  selectedUser: string;
};

const ConnectedChatBar = ({
  selectedUser,
  ...props
}: ConnectedChatBarProps) => {
  const {
    data: userData,
    loading: userLoading,
    error: userError,
  } = useQuery(GET_USER, {
    variables: {
      id: selectedUser,
    },
  });
  const [createMessage, { loading, error }] = useMutation(CREATE_MESSAGE);
  const onSubmit = React.useCallback(
    (content: string) => {
      return createMessage({ variables: { author: selectedUser, content } });
    },
    [createMessage, selectedUser]
  );

  const user = userData?.users?.[0];

  return (
    <ChatBar
      onSubmit={onSubmit}
      loading={loading}
      error={error?.message}
      user={user}
      {...props}
    />
  );
};

export default ConnectedChatBar;

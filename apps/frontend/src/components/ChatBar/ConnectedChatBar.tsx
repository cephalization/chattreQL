import { useMutation } from "@apollo/client";
import * as React from "react";
import { CREATE_MESSAGE } from "../../queries/queries";
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
  const [createMessage, { loading, error }] = useMutation(CREATE_MESSAGE);
  const onSubmit = React.useCallback(
    (content: string) => {
      return createMessage({ variables: { author: selectedUser, content } });
    },
    [createMessage, selectedUser]
  );
  return (
    <ChatBar
      onSubmit={onSubmit}
      loading={loading}
      error={error?.message}
      {...props}
    />
  );
};

export default ConnectedChatBar;

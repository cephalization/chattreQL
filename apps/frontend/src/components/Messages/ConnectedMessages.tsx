import * as React from "react";
import { useQuery } from "@apollo/client";

import { GET_MESSAGES } from "../../queries/queries";
import Messages, { type MessagesProps } from "./Messages";

type ConnectedMessagesProps = Omit<MessagesProps, "messages">;

const ConnectedMessages = (props: ConnectedMessagesProps) => {
  const { loading, data, error } = useQuery(GET_MESSAGES);

  if (loading) {
    return <p>Loading messages...</p>;
  }

  if (error) {
    return (
      <p>
        <>Error: {error.message}</>
      </p>
    );
  }

  return <Messages messages={data.messages} {...props} />;
};

export default ConnectedMessages;

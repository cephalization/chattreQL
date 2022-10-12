import * as React from "react";
import { useQuery } from "@apollo/client";

import { GET_MESSAGES, SUBSCRIBE_GET_MESSAGES } from "../../queries/queries";
import Messages, { type MessagesProps } from "./Messages";

type ConnectedMessagesProps = Omit<MessagesProps, "messages">;

const ConnectedMessages = (props: ConnectedMessagesProps) => {
  const { data, loading, subscribeToMore, error } = useQuery(GET_MESSAGES);

  const subscribeToMessages = React.useCallback(() => {
    subscribeToMore({
      document: SUBSCRIBE_GET_MESSAGES,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;

        return {
          ...prev,
          messages: [...prev.messages, subscriptionData.data.messageCreated],
        };
      },
    });
  }, [subscribeToMore]);

  React.useEffect(() => {
    // this appears to smartly cache and reuse existing subscriptions
    subscribeToMessages();
  }, [subscribeToMessages]);

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

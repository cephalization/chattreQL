import * as React from "react";
import ChatBar, { type ChatBarProps } from "./ChatBar";

type ConnectedChatBarProps = Omit<ChatBarProps, "onSubmit">;

const ConnectedChatBar = (props: ConnectedChatBarProps) => {
  return (
    <ChatBar
      onSubmit={() => new Promise((resolve) => resolve({ success: true }))}
      {...props}
    />
  );
};

export default ConnectedChatBar;

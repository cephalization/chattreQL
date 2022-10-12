import * as React from "react";
import ConnectedMessages from "../../components/Messages";

type ChatProps = {
  selectedUser: string;
};

const Chat = ({ selectedUser }: ChatProps) => {
  return (
    <div>
      <ConnectedMessages />
    </div>
  );
};

export default Chat;

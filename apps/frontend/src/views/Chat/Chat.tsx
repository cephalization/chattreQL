import * as React from "react";
import ConnectedChatBar from "../../components/ChatBar";
import ConnectedMessages from "../../components/Messages";

type ChatProps = {
  selectedUser: string;
};

const Chat = ({ selectedUser }: ChatProps) => {
  return (
    <div className="w-96 space-y-4">
      <div className="flex flex-col-reverse h-96 overflow-y-auto">
        <ConnectedMessages />
      </div>
      <ConnectedChatBar selectedUser={selectedUser} />
    </div>
  );
};

export default Chat;

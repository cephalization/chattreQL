import * as React from "react";
import ConnectedChatBar from "../../components/ChatBar";
import ConnectedMessages from "../../components/Messages";

type ChatProps = {
  selectedUser: string;
};

const Chat = ({ selectedUser }: ChatProps) => {
  return (
    <div className="flex-col w-full sm:w-96 justify-between sm:space-y-4">
      <div className="flex flex-col-reverse sm:h-96 overflow-y-auto">
        <ConnectedMessages />
      </div>
      <div className="flex-1 flex w-full">
        <ConnectedChatBar selectedUser={selectedUser} />
      </div>
    </div>
  );
};

export default Chat;

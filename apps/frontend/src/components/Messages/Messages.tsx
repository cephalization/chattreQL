import * as React from "react";
import "./messages.css";

export type MessagesProps = {
  className?: string;
  messages: {
    id: string;
    content: string;
    author: {
      name: string;
    };
  }[];
};

const Messages = ({ messages, className }: MessagesProps) => {
  return (
    <ul className={className}>
      {messages.map((m) => (
        <li key={m.id} className="flex w-full gap-1 items-center">
          <p className="flex w-12 text-sm mr-4">{m.author.name}</p>
          <p className="text-lg">{m.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Messages;

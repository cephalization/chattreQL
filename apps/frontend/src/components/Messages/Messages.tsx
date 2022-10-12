import * as React from "react";
import "./messages.css";

type MessagesProps = {
  messages: {
    id: string;
    content: string;
    author: {
      name: string;
    };
  }[];
};

const Messages = ({ messages }: MessagesProps) => {
  return (
    <ul>
      {messages.map((m) => (
        <li key={m.id} className="message">
          <p>{m.content}</p>
          <p>{m.author.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default Messages;

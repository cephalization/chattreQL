import { messages as messagesSource } from "../data";
import { type Message } from "../data/message";
import { type User } from "../data/user";

type MessageParents = User | null;
type MessageArgs = {
  id?: Message["id"];
  userId?: User["id"];
};

export const messages = (_: MessageParents, args: MessageArgs) => {
  if (args.userId) {
    return messagesSource.filter((message) => message.author === args.userId);
  }

  if (args.id) {
    return messagesSource.filter((message) => message.id === args.id);
  }

  return messagesSource;
};

export const userMessages = (parent: MessageParents) => {
  if (parent) {
    return messagesSource.filter((message) => message.author === parent.id);
  }
};

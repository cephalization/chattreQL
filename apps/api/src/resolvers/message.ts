import {
  MessageDataSource,
  UserDataSource,
  type UserInternal,
  type MessageInternal,
} from "../data";
import { type User } from "../typeDefs";
import { EVENTS } from "../events";
import { pubsub } from "./pubsub";

type MessageParents = UserInternal | null;
type MessageArgs = {
  id?: string;
  userId?: string;
};

export const messages = (
  _: MessageParents,
  args: MessageArgs
): MessageInternal[] => {
  if (args.userId) {
    return MessageDataSource.messages.filter(
      (message) => message.author === args.userId
    );
  }

  if (args.id) {
    return MessageDataSource.messages.filter(
      (message) => message.id === args.id
    );
  }

  return MessageDataSource.messages;
};

export const userMessages = (
  parent: MessageParents
): MessageInternal[] | undefined => {
  if (parent) {
    return MessageDataSource.messages.filter(
      (message) => message.author === parent.id
    );
  }
};

export const messageCreatedPubSub = () =>
  pubsub.asyncIterator([EVENTS.MESSAGE_CREATED]);

export const createMessageMutation = (
  _: MessageParents,
  args: { author: User["id"]; content: MessageInternal["content"] }
): MessageInternal => {
  const author = UserDataSource.users.find((u) => u.id === args.author);

  if (!author) {
    throw new Error("The author no longer exists. Cannot send message.");
  }

  const newMessage: MessageInternal = {
    id: MessageDataSource.nextId.toString(),
    author: args.author,
    content: args.content,
  };

  MessageDataSource.messages.push(newMessage);
  MessageDataSource.nextId = MessageDataSource.nextId + 1;

  pubsub.publish(EVENTS.MESSAGE_CREATED, { messageCreated: newMessage });

  return newMessage;
};

export const removeMessageMutation = (
  _: MessageParents,
  args: { id: MessageInternal["id"] }
): MessageInternal | undefined => {
  const message = MessageDataSource.messages.find((m) => m.id === args.id);

  MessageDataSource.messages = MessageDataSource.messages.filter(
    (m) => m.id !== args.id
  );

  return message;
};

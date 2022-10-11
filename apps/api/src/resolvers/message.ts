import {
  MessageDataSource,
  UserDataSource,
  type Message,
  type MessageFull,
  type User,
  type UserFull,
} from "../data";

type MessageParents = UserFull | null;
type MessageArgs = {
  id?: Message["id"];
  userId?: User["id"];
};

export const messages = (_: MessageParents, args: MessageArgs) => {
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

export const userMessages = (parent: MessageParents) => {
  if (parent) {
    return MessageDataSource.messages.filter(
      (message) => message.author === parent.id
    );
  }
};

export const createMessageMutation = (
  _: MessageParents,
  args: { author: User["id"]; content: Message["content"] }
) => {
  const author = UserDataSource.users.find((u) => u.id === args.author);

  if (!author) {
    throw new Error("The author no longer exists. Cannot send message.");
  }

  const newMessage: MessageFull = {
    id: MessageDataSource.nextId.toString(),
    author: args.author,
    content: args.content,
  };

  MessageDataSource.messages.push(newMessage);
  MessageDataSource.nextId = MessageDataSource.nextId + 1;

  return newMessage;
};

export const removeMessageMutation = (
  _: MessageParents,
  args: { id: Message["id"] }
): Message | undefined => {
  const message = MessageDataSource.messages.find((m) => m.id === args.id);

  MessageDataSource.messages = MessageDataSource.messages.filter(
    (m) => m.id !== args.id
  );

  return message;
};

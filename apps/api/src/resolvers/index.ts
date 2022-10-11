import { messages, userMessages } from "./message";
import { messageAuthor, users } from "./user";

export const resolvers = {
  Query: {
    messages,
    users,
  },
  User: {
    messages: userMessages,
  },
  Message: {
    author: messageAuthor,
  },
};

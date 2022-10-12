import {
  messages,
  userMessages,
  createMessageMutation,
  removeMessageMutation,
} from "./message";
import { messageAuthor, users } from "./user";

export const resolvers = {
  Query: {
    messages,
    users,
  },
  Mutation: {
    createMessage: createMessageMutation,
    removeMessage: removeMessageMutation,
  },
  User: {
    messages: userMessages,
  },
  Message: {
    author: messageAuthor,
  },
};

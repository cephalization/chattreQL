import { PubSub } from "graphql-subscriptions";
import {
  messages,
  userMessages,
  createMessageMutation,
  removeMessageMutation,
  messageCreatedPubSub,
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
  Subscription: {
    messageCreated: {
      subscribe: messageCreatedPubSub,
    },
  },
  User: {
    messages: userMessages,
  },
  Message: {
    author: messageAuthor,
  },
};

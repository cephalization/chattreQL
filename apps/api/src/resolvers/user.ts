import { UserDataSource, type Message } from "../data";
import { MessageFull } from "../data/message";

type UserParents = MessageFull | null;
type UserArgs = {
  id?: Message["id"];
};

/**
 * User source
 * handles fetch all, fetch by ID
 *
 * @param parent
 * @returns
 */
export const users = (_: UserParents, args: UserArgs) => {
  if (args.id) {
    return UserDataSource.users.filter((user) => user.id === args.id);
  }

  return UserDataSource.users;
};

/**
 * message -> user relationship source
 * handles fetch for author (user) of message
 * @param parent
 * @returns
 */
export const messageAuthor = (parent: UserParents) => {
  if (parent) {
    return UserDataSource.users.find((user) => parent.author === user.id);
  }
};

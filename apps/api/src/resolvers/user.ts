import { users as usersSource } from "../data";
import { type Message } from "../data/message";

type UserParents = Message | null;
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
    return usersSource.filter((user) => user.id === args.id);
  }

  return usersSource;
};

/**
 * message -> user relationship source
 * handles fetch for author (user) of message
 * @param parent
 * @returns
 */
export const messageAuthor = (parent: UserParents) => {
  if (parent) {
    return usersSource.find((user) => parent.author === user.id);
  }
};

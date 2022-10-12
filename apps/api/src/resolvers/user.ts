import {
  type MessageInternal,
  UserDataSource,
  type UserInternal,
} from "../data";

type UserParents = MessageInternal | null;
type UserArgs = {
  id?: string;
};

/**
 * User source
 * handles fetch all, fetch by ID
 *
 * @param parent
 * @returns
 */
export const users = (_: UserParents, args: UserArgs): UserInternal[] => {
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
export const messageAuthor = (
  parent: UserParents
): UserInternal | undefined => {
  if (parent) {
    return UserDataSource.users.find((user) => parent.author === user.id);
  }
};

export type User = {
  id: string;
  name: string;
};

export type UserFull = User & {
  messages: string[];
};

export const dataSource: { nextId: number; users: UserFull[] } = {
  nextId: 4,
  users: [
    {
      id: "1",
      name: "tony",
      messages: ["1", "4", "5"],
    },
    {
      id: "2",
      name: "hannah",
      messages: ["2"],
    },
    {
      id: "3",
      name: "benny",
      messages: ["3"],
    },
  ],
};

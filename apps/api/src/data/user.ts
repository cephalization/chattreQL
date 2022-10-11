export type User = {
  id: number;
  name: string;
  messages: number[];
};

export const users = [
  {
    id: 1,
    name: "tony",
    messages: [1, 4, 5],
  },
  {
    id: 2,
    name: "hannah",
    messages: [2],
  },
  {
    id: 3,
    name: "benny",
    messages: [3],
  },
];

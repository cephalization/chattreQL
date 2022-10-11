export type Message = {
  id: number;
  author: number;
  content: string;
};

export const messages: Message[] = [
  {
    id: 1,
    author: 1,
    content: "hello world",
  },
  {
    id: 2,
    author: 2,
    content: "hello, I am hannah",
  },
  {
    id: 3,
    author: 3,
    content: "hello, I am benny",
  },
  {
    id: 4,
    author: 1,
    content: "hi hannah",
  },
  {
    id: 5,
    author: 1,
    content: "hi benny",
  },
];

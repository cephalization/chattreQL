export type MessageInternal = {
  id: string;
  content: string;
  author: string;
};

// there will be mutation race conditions until I transition to a real data source
export const dataSource: { nextId: number; messages: MessageInternal[] } = {
  nextId: 6,
  messages: [
    {
      id: "1",
      author: "1",
      content: "hello world",
    },
    {
      id: "2",
      author: "2",
      content: "hello, I am hannah",
    },
    {
      id: "3",
      author: "3",
      content: "hello, I am benny",
    },
    {
      id: "4",
      author: "1",
      content: "hi hannah",
    },
    {
      id: "5",
      author: "1",
      content: "hi benny",
    },
  ],
};

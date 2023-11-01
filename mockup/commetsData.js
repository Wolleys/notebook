const commentsData = [
  {
    id: 1,
    username: "Jane",
    date: "Oct 27, 2023",
    content:
      "This is a sample comment. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    likes: 30,
    replies: [
      {
        id: 4,
        username: "Bob",
        date: "Oct 28, 2023",
        content: "Reply to Jane's comment. Lorem ipsum dolor sit amet.",
        likes: 5,
        replies: [
          {
            id: 7,
            username: "Charlie",
            date: "Oct 29, 2023",
            content: "Reply to Bob's reply. Lorem ipsum dolor sit amet.",
            likes: 3,
            comments: 1,
            replies: [],
          },
        ],
      },
      {
        id: 2,
        username: "Wolleys",
        date: "Oct 28, 2023",
        content:
          "Another reply to Jane's comment. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        likes: 15,
        replies: [],
      },
    ],
  },
  {
    id: 2,
    username: "John",
    date: "Oct 28, 2023",
    content:
      "Another comment. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    likes: 15,
    replies: [],
  },
  {
    id: 3,
    username: "Alice",
    date: "Oct 29, 2023",
    content:
      "Yet another comment. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    likes: 10,
    replies: [],
  },
];

export default commentsData;

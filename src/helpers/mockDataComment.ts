export const DataComments = [
  {
    id: 1,
    name: 'John Doe',
    timestamp: '9',
    content: 'Nice post!',
    avatar: '/avatar1.jpg',
    likes: 2,
    replies: [
      {
        id: 11,
        name: 'John Doe child 1',
        timestamp: '9',
        content: 'Nice post!',
        avatar: '/avatar1.jpg',
        likes: 2,
        replies: [
          {
            id: 21,
            name: 'John Doe child 2 1',
            timestamp: '9',
            content: 'Nice post!',
            avatar: '/avatar1.jpg',
            likes: 2,
            replies: [
              {
                id: 22,
                name: 'John Doe',
                timestamp: '9',
                content: 'Nice post!',
                avatar: '/avatar1.jpg',
                likes: 2,
                replies: []
              }
            ]
          }
        ]
      },
      {
        id: 12,
        name: 'John Doe child 2',
        timestamp: '9',
        content: 'Nice post!',
        avatar: '/avatar1.jpg',
        likes: 2,
        replies: [
          {
            id: 1,
            name: 'John Doe',
            timestamp: '9',
            content: 'Nice post!',
            avatar: '/avatar1.jpg',
            likes: 2,
            replies: []
          }
        ]
      }
    ]
  },
  { id: 2, name: 'Jane Smith', timestamp: '9', content: 'Amazing!', avatar: '/avatar2.jpg', likes: 1, replies: [] }
]
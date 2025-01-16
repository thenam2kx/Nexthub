/* eslint-disable @typescript-eslint/no-explicit-any */
import { IComment } from '@/components/BasePost/Comment/CommentItem'
import { IPost } from '@/interface/post.interface'
import { createSlice } from '@reduxjs/toolkit'


export interface PostState {
  listComments: IComment[]
  depthComment: number
  isOpenModalComment: boolean
  likePost: number
  listPost: IPost[]
}


const initialState: PostState = {
  depthComment: 0,
  isOpenModalComment: false,
  likePost: 10,
  listComments: [
    {
      id: '1',
      name: 'Jane Smith',
      timestamp: '9',
      content: 'Amazing!',
      avatar: '/avatar2.jpg',
      likes: 1,
      replies: [
        {
          id: '11',
          name: 'Jane Smith children',
          timestamp: '9',
          content: 'Amazing!',
          avatar: '/avatar2.jpg',
          likes: 12,
          replies: []
        }
      ]
    },
    {
      id: '2',
      name: 'The Nam',
      timestamp: '9',
      content: 'Amazing!',
      avatar: '/avatar2.jpg',
      likes: 0,
      replies: [
        {
          id: '21',
          name: 'Jane Smith children',
          timestamp: '9',
          content: 'Amazing!',
          avatar: '/avatar2.jpg',
          likes: 2,
          replies: []
        }
      ]
    }
  ],
  listPost: [
    {
      id: 'post12345',
      user: {
        id: 'user67890',
        name: 'Nguyễn Văn A',
        avatar: 'https://via.placeholder.com/150',
        url: ''
      },
      content: `Hôm nay là một ngày thật tuyệt vời! 😍 #Life #Motivation,Hôm nay là một ngày thật tuyệt vời!
      😍 #Life #Motivation, Hôm nay là một ngày thật tuyệt vời! 😍 #Life #Motivation,
      😍 #Life #Motivation, Hôm nay là một ngày thật tuyệt vời! 😍 #Life #Motivation,
      😍 #Life #Motivation, Hôm nay là một ngày thật tuyệt vời! 😍 #Life #Motivation,
      😍 #Life #Motivation, Hôm nay là một ngày thật tuyệt vời! 😍 #Life #Motivation,
      😍 #Life #Motivation, Hôm nay là một ngày thật tuyệt vời! 😍 #Life #Motivation,
      😍 #Life #Motivation, Hôm nay là một ngày thật tuyệt vời! 😍 #Life #Motivation`,
      images: [
        'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        // 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        // 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        // 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        // 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        // 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        // 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        // 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        // 'https://images.unsplash.com/photo-1533827432537-70133748f5c8'
      ],
      createdAt: '1736496000',
      reactions: {
        like: 120,
        love: 45,
        haha: 10,
        sad: 2,
        angry: 1
      },
      comments: [
        {
          id: 'comment001',
          user: {
            id: 'user123',
            name: 'Trần Thị B',
            avatar: 'https://via.placeholder.com/150',
            url: ''
          },
          content: 'Thật tuyệt vời! ❤️',
          createdAt: '2025-01-10T08:30:00Z',
          reactions: {
            like: 10,
            love: 3
          }
        },
        {
          id: 'comment002',
          user: {
            id: 'user456',
            name: 'Lê Văn C',
            avatar: 'https://via.placeholder.com/150',
            url: ''
          },
          content: 'Ngưỡng mộ bạn quá! 🥰',
          createdAt: '2025-01-10T08:45:00Z',
          reactions: {
            like: 8
          }
        }
      ],
      shares: 12
    },
    {
      id: 'post6789',
      user: {
        id: 'user12345',
        name: 'Nguyễn Văn B',
        avatar: 'https://via.placeholder.com/150',
        url: ''
      },
      content: `Hôm nay là một ngày thật tuyệt vời! 😍 #Life #Motivation,Hôm nay là một ngày thật tuyệt vời!
      😍 #Life #Motivation, Hôm nay là một ngày thật tuyệt vời! 😍 #Life #Motivation,
      😍 #Life #Motivation, Hôm nay là một ngày thật tuyệt vời! 😍 #Life #Motivation,`,
      images: [
        'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c'
      ],
      createdAt: '1736496000',
      reactions: {
        like: 20,
        love: 5,
        haha: 1
      },
      comments: [
        {
          id: 'comment001',
          user: {
            id: 'user123',
            name: 'Trần Thị B',
            avatar: 'https://via.placeholder.com/150',
            url: ''
          },
          content: 'Thật tuyệt vời! ❤️',
          createdAt: '2025-01-10T08:30:00Z',
          reactions: {
            like: 10,
            love: 3
          }
        }
      ],
      shares: 10
    }
  ]
}


const findAndUpdateObjectById = (
  data: any[],
  targetId: number,
  isPlush: boolean
): any[] => {
  return data.map(item => {
    // Nếu tìm thấy object chính
    if (item.id === targetId) {
      if (isPlush) {
        return { ...item, likes: item.likes + 1 }
      } else {
        return { ...item, likes: item.likes - 1 }
      }
    }

    // Nếu có replies, tìm kiếm và cập nhật trong replies
    if (item.replies && item.replies.length > 0) {
      item.replies = findAndUpdateObjectById(item.replies, targetId, isPlush)
    }

    return item // Trả về object sau khi đã cập nhật hoặc không thay đổi
  })
}

const findAndAddReplyById = (data: any[], targetId: number, newReply: IComment): any[] => {
  return data.map(item => {
    // Nếu tìm thấy object chính
    if (item.id === targetId) {
      return {
        ...item,
        replies: [...item.replies, newReply]
      }
    }

    // Nếu có replies, đệ quy tìm kiếm và thêm reply vào trong replies
    if (item.replies && item.replies.length > 0) {
      item.replies = findAndAddReplyById(item.replies, targetId, newReply)
    }

    return item
  })
}


const checkSlug = (slug: string) => {
  switch(slug) {
  case 'like':
    return 'like'
    break
  case 'love':
    return 'love'
    break
  case 'haha':
    return 'haha'
    break
  case 'sad':
    return 'sad'
    break
  case 'angry':
    return 'angry'
    break
  default:
    return ''
  }
}
const findPostAndUpdateReaction = (listPost: IPost[], postId: string, reaction: string) => {
  const post = listPost.find(post => { return post.id === postId })
  if (post && post?.reactions) {
    return post.reactions[reaction] += 1
  }
}

const postSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    addComment: (state, action) => {
      const comment = action.payload
      const listComment = state.listComments
      state.listComments = [...listComment, comment]
    },

    addReply: (state, action) => {
      const { parentId, newReply } = action.payload
      state.listComments = findAndAddReplyById(state.listComments, parentId, newReply)
    },

    addLikeComment: (state, action) => {
      const isPlush = true
      state.listComments = findAndUpdateObjectById(state.listComments, action.payload, isPlush)
    },

    deleteLikeComment: (state, action) => {
      const isPlush = false
      state.listComments = findAndUpdateObjectById(state.listComments, action.payload, isPlush)
    },

    increment: (state) => {
      state.depthComment += 1
    },

    setOpenModalComment: (state) => {
      state.isOpenModalComment = !state.isOpenModalComment
    },

    handleLikePost: (state) => {
      state.likePost += 1
    },

    handleDisLikePost: (state) => {
      state.likePost -= 1
    },

    handleReactionPost: (state, action) => {
      const { slug, postId } = action.payload
      findPostAndUpdateReaction(state.listPost, postId, slug)
    }
  }
})

// Action creators are generated for each case reducer function
export const {
  addComment,
  addLikeComment,
  deleteLikeComment,
  addReply,
  increment,
  setOpenModalComment,
  handleLikePost,
  handleDisLikePost,

  handleReactionPost
} = postSlice.actions

export default postSlice.reducer
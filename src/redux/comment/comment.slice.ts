/* eslint-disable @typescript-eslint/no-explicit-any */
import { IComment } from '@/components/BasePost/Comment/CommentItem'
import { createSlice } from '@reduxjs/toolkit'


export interface CommentState {
  listComments: IComment[]
  depthComment: number
  isOpenModalComment: boolean
}

const initialState: CommentState = {
  depthComment: 0,
  isOpenModalComment: false,
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

const commentSlice = createSlice({
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
  setOpenModalComment
} = commentSlice.actions

export default commentSlice.reducer
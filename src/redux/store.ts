import { configureStore } from '@reduxjs/toolkit'
import commentReducer from './comment/comment.slice'
import postReducer from './post/post.slice'

// redux store
export const store = configureStore({
  reducer: {
    comment: commentReducer,
    post: postReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

import { configureStore } from '@reduxjs/toolkit'
import SchoolReducer from './feat/SchoolSlice'

export const store = configureStore({
  reducer: {
    School: SchoolReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
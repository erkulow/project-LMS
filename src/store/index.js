import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './authSlice'
import { courseSlice } from './coursSlice'

export const store = configureStore({
   reducer: {
      auth: authSlice.reducer,
      course: courseSlice.reducer,
   },
})

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { baseFetch } from '../api/baseFetch'
import { fileFetchApi } from '../api/fileFetchApi'

export const getCourseList = createAsyncThunk(
   'admin/slice/getCourseList',
   async () => {
      try {
         const response = await baseFetch({
            path: 'api/courses',
            method: 'GET',
            params: {
               page: 0,
               size: 8,
            },
         })

         return response
      } catch (error) {
         return error.message
      }
   }
)
export const createCourse = createAsyncThunk(
   'admin/slice/createCourse',
   async (groupInfo) => {
      try {
         const response = await baseFetch({
            path: 'api/courses',
            method: 'POST',
            body: groupInfo,
         })
         return response
      } catch (error) {
         return error.message
      }
   }
)

export const sendPhoto = createAsyncThunk(
   'admin/slice/sendPhoto',
   async (file) => {
      try {
         const response = await fileFetchApi({
            path: 'api/files/upload',
            file,
         })
         return response
      } catch (error) {
         return error.message
      }
   }
)
export const deleteCourse = createAsyncThunk(
   'admin/slice/deleteCourse',
   async (id) => {
      try {
         const response = await baseFetch({
            path: `api/courses/${id}`,
            method: 'DELETE',
         })
         return response
      } catch (error) {
         return error.message
      }
   }
)

const initState = {
   error: null,
   isLoading: null,
   pages: 0,
   courses: [],
   table: [],
   currentPage: 0,
}
export const courseSlice = createSlice({
   name: 'course/slice',
   initialState: initState,
   reducers: {},
   extraReducers: {
      [getCourseList.fulfilled]: (state, actions) => {
         const { courses, currentPage, pages } = actions.payload
         state.courses = courses
         state.currentPage = currentPage
         state.pages = pages
         console.log(courses)
      },
      [getCourseList.rejected]: (state, actions) => {
         console.log('Error')
      },

      [sendPhoto.fulfilled]: (state, actions) => {
         console.log('GeshaSexy')
      },
      [createCourse.fulfilled]: (state, actions) => {
         const newGroup = actions.payload
         state.courses = [...state.courses, newGroup]
      },
      [deleteCourse.fulfilled]: (state, action) => {
         const { id } = action.payload
         state.courses = state.groups.filter((item) => item.id !== id)
      },
   },
})

export const coursAction = courseSlice.actions

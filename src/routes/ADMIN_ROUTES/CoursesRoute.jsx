import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { CoursePanel } from '../../components/ADMIN/courses/CoursePanel'
import { CourseInnerPage } from '../../components/ADMIN/courses/CourseInnerPage'

export const CoursesRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<CoursePanel />} />
         <Route path="/:coursesId" element={<CourseInnerPage />} />
      </Routes>
   )
}

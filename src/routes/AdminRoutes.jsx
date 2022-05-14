import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { CoursePanel } from '../components/ADMIN/courses/CoursePanel'

export const AdminRoutes = () => {
   return (
      <Routes>
         <Route path="" element={<Navigate to="groups" />} />
         <Route path="groups/*" element={<div>groups</div>} />
         <Route path="courses/*" element={<CoursePanel />} />
         <Route path="teachers/*" element={<div>teachers</div>} />
         <Route path="students/*" element={<div>students</div>} />
      </Routes>
   )
}

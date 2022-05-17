import React from 'react'
import { useDispatch } from 'react-redux'
import { GiHamburgerMenu } from 'react-icons/gi'
import styled from 'styled-components'
import { Box } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import { Profile } from '../components/UI/Profile'
import media from '../utils/helpers/media'
import { logout } from '../store/authSlice'
import { TabsTitle } from '../components/UI/Tabs'
import TemporaryDrawer from '../components/UI/Drawer'

const userRole = {
   ADMIN: {
      role: 'Админстратор',
      tabs: [
         {
            path: 'teachers',
            label: 'Учителя',
         },
         {
            path: 'students',
            label: 'Студенты',
         },
      ],
   },
   INSTRUCTOR: {
      role: 'Инструктор',
      tabs: [
         {
            path: 'material',
            label: 'Материалы',
         },
         {
            path: 'students',
            label: 'Студенты',
         },
      ],
   },
   STUDENT: {
      role: 'Студент',
      tabs: [
         {
            path: 'material',
            label: 'Материалы',
         },
         {
            path: 'rating',
            label: 'Рейтинг одногрупников',
         },
      ],
   },
}

export const Header = ({ roles }) => {
   const dispatch = useDispatch()
   const logoutHandler = () => {
      dispatch(logout())
   }
   return (
      <StyledHeader>
         <TemporaryDrawer roles={roles} />
         <Box width="100%" display="flex" justifyContent="space-between">
            <div />
            <Routes>
               <Route
                  path="courses/:id/*"
                  element={<TabsTitle tabs={userRole[roles].tabs} />}
               />
            </Routes>
            <Profile onLogout={logoutHandler} title={userRole[roles].role} />
         </Box>
      </StyledHeader>
   )
}

const StyledHeader = styled.header`
   display: flex;
   justify-content: flex-end;
   align-items: center;
   height: 60px;
   border-bottom: 1px solid #c4c4c4;
`

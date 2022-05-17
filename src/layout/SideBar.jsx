import React from 'react'
import { NavLink } from 'react-router-dom'
import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import styled from 'styled-components'
import { ReactComponent as Logo } from '../assets/icons/SideBarLogo.svg'
import { ReactComponent as CourseIcon } from '../assets/icons/CourseIcon.svg'
import { ReactComponent as TeachersIcon } from '../assets/icons/TeachersIcon.svg'
import { ReactComponent as StudentIcon } from '../assets/icons/StudentIcon.svg'
import { ReactComponent as GroupsIcon } from '../assets/icons/GroupsIcon.svg'
import { ReactComponent as TvIcon } from '../assets/icons/TV.svg'
import media from '../utils/helpers/media'

const sideBar = {
   ADMIN: [
      {
         title: 'Группы',
         path: 'groups',
         icon: <GroupsIcon />,
      },
      { title: 'Курсы', path: 'courses', icon: <CourseIcon /> },
      { title: 'Учителя', path: 'teachers', icon: <TeachersIcon /> },
      { title: 'Студенты', path: 'students', icon: <StudentIcon /> },
   ],

   INSTRUCTOR: [
      {
         title: 'Мои курсы',
         path: 'courses',
         icon: <TvIcon />,
      },
   ],

   STUDENT: [
      {
         title: 'Мои курсы',
         path: 'courses',
         icon: <TvIcon />,
      },
   ],
}

export const SideBar = ({ roles }) => {
   return (
      <>
         {' '}
         <StyledBox position="fixed" width="240px">
            <SidebarList>
               <StyledLogo roles={roles} />
               {sideBar[roles].map((item) => (
                  <StyledNavLink end to={item.path} key={item.title}>
                     <StyledListItem button key={item.title}>
                        <SelectedLink />
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.title} />
                     </StyledListItem>
                  </StyledNavLink>
               ))}
            </SidebarList>
         </StyledBox>
      </>
   )
}

const StyledNavLink = styled(NavLink)``
const SelectedLink = styled.span`
   display: none;
   position: absolute;
   background: #1f6ed4;
   left: 0;
   width: 8px;
   height: 100%;
`

const StyledLogo = styled(Logo)`
   margin: 38px 0 66px 0;
`
const StyledListItem = styled(ListItem)`
   padding: 1.5px;
   padding-left: 4px;
`

const StyledBox = styled(Box)`
   text-align: center;
   height: 100vh;
   background-color: #fff;
   ${media.mobile`
      height:73px;
      display: none;
   `}
`
const SidebarList = styled(List)(() => ({
   '& .MuiListItem-root': {
      width: '93%',
      paddingLeft: '4vh',
      borderRadius: '0 10px 10px 0',
      color: '#292929',
      '& .MuiTypography-root': {
         fontWeight: '600',
         fontSize: '16px',
         lineHeight: '22px',
      },

      '& path': {
         fill: '#292929',
      },
   },
   '& a': {
      textDecoration: 'none',
   },

   '& .active': {
      '& .MuiListItem-root': {
         fill: '#1F6ED4',
         background: 'rgb(221,233,249)',
      },
      '& span': {
         display: 'block',
      },
      '& path': {
         fill: '#1F6ED4',
      },
   },
}))

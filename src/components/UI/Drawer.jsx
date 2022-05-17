/* eslint-disable react/jsx-fragments */
import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { NavLink } from 'react-router-dom'
import Divider from '@mui/material/Divider'
import { GiHamburgerMenu } from 'react-icons/gi'
import styled from 'styled-components'
import media from '../../utils/helpers/media'
import { ReactComponent as Logo } from '../../assets/icons/SideBarLogo.svg'
import { ReactComponent as CourseIcon } from '../../assets/icons/CourseIcon.svg'
import { ReactComponent as TeachersIcon } from '../../assets/icons/TeachersIcon.svg'
import { ReactComponent as StudentIcon } from '../../assets/icons/StudentIcon.svg'
import { ReactComponent as GroupsIcon } from '../../assets/icons/GroupsIcon.svg'
import { ReactComponent as TvIcon } from '../../assets/icons/TV.svg'

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
export default function TemporaryDrawer({ roles }) {
   const [state, setState] = React.useState({
      left: false,
   })
   const toggleDrawer = (anchor, open) => (event) => {
      if (
         event.type === 'keydown' &&
         (event.key === 'Tab' || event.key === 'Shift')
      ) {
         return
      }

      setState({ ...state, [anchor]: open })
   }

   const list = (anchor) => (
      <Box
         sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
         role="presentation"
         onClick={toggleDrawer(anchor, false)}
         onKeyDown={toggleDrawer(anchor, false)}
      >
         <SidebarList>
            <StyledLogo>
               <Logo />
            </StyledLogo>
            <Divider />
            <br />
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
         <Divider />
      </Box>
   )

   return (
      <div>
         {['left'].map((anchor) => (
            <React.Fragment key={anchor}>
               <NavbarIcons onClick={toggleDrawer(anchor, true)} />
               <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
               >
                  {list(anchor)}
               </Drawer>
            </React.Fragment>
         ))}
      </div>
   )
}
const NavbarIcons = styled(GiHamburgerMenu)`
   font-size: 28px;
   color: grey;
   display: none;
   ${media.mobile`
   display: block;
   `}
`
const StyledLogo = styled(Logo)`
   text-align: center;
   margin: 0 0 0 15px;
`
const StyledNavLink = styled(NavLink)``
const StyledListItem = styled(ListItem)`
   padding: 1.5px;
   padding-left: 4px;
`
const SelectedLink = styled.span`
   display: none;
   position: absolute;
   background: #1f6ed4;
   left: 0;
   width: 8px;
   height: 100%;
`
const SidebarList = styled(List)(() => ({
   '& .MuiListItem-root': {
      width: '93%',
      paddingLeft: '2vh',
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

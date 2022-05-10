import { Box } from '@mui/material'
import React from 'react'
import { SideBar } from './SideBar'
import { Header } from './Header'

export const Layout = ({ roles, children }) => {
   return (
      <Box display="flex">
         <SideBar roles={roles} />
         <Box width="100%" padding="14px 40px 74px 20px">
            <Header roles={roles} />
            {children}
         </Box>
      </Box>
   )
}
import { Box } from '@mui/material'
import styled from 'styled-components'
import React from 'react'
import { SideBar } from './SideBar'
import { Header } from './Header'
import media from '../utils/helpers/media'

export const Layout = ({ roles, children }) => {
   return (
      <Box display="flex">
         <SideBar roles={roles} />
         <StyledBox>
            <Header roles={roles} />
            {children}
         </StyledBox>
      </Box>
   )
}

const StyledBox = styled(Box)`
   width: 100%;
   padding: 14px 20px 14px 20px;
   margin-left: 240px;
   ${media.mobile`
       margin-left: 0;
   `}
`

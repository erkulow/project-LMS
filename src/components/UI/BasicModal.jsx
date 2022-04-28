import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { useState } from 'react'
import styled from 'styled-components'

const style = {
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 541,
   bgcolor: '#ffff',
   boxShadow: 2,
   p: 0,
   borderRadius: '10px',
   border: 'none',
   outline: 'none',
}
const StyledModal = styled(Modal)`
   .css-i9fmh8-MuiBackdrop-root-MuiModal-backdrop {
      background-color: #ffff;
   }
`
const StyledHeader = styled.header`
   width: 100%;
   height: 68px;
   background-color: #3772ff;
   border-top-left-radius: 10px;
   border-top-right-radius: 10px;
   display: flex;
   justify-content: center;
   align-items: flex-end;
`
const StyledHeaderTitle = styled.h1`
   color: #ffff;
   font-size: 20px;
   font-style: normal;
   line-height: 27px;
   font-weight: 400;
   align-items: center;
`
const StyledContentContainer = styled.div`
   padding: 25px;
`
const StyledFooter = styled.footer`
   display: flex;
   justify-content: flex-end;
   padding: 25px;
`
export const BasicModal = ({ title, children }) => {
   const [open, setOpen] = useState(true)
   const handleClose = () => {
      setOpen(false)
   }
   const handleToggle = () => {
      setOpen(true)
   }
   return (
      <StyledModal
         open={open}
         onClose={handleToggle}
         aria-labelledby="modal-modal-title"
         aria-describedby="modal-modal-description"
      >
         <Box sx={style}>
            <StyledHeader>
               <StyledHeaderTitle>{title}</StyledHeaderTitle>
            </StyledHeader>
            <StyledContentContainer>{children}</StyledContentContainer>
            <StyledFooter>
               <button type="button" onClick={handleClose}>
                  Cancel
               </button>
               <button type="button" onClick={handleToggle}>
                  Add
               </button>
            </StyledFooter>
         </Box>
      </StyledModal>
   )
}
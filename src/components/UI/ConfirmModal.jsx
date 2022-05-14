import React from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import styled from 'styled-components'
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'
import { Buttons } from './Buttons'

const style = {
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: '315px',
   height: '145px',
   bgcolor: '#ffff',
   boxShadow: 2,
   p: 0,
   borderRadius: '10px',
   border: 'none',
   outline: 'none',
}

const StyledHeaderTitle = styled.h1`
   color: '#1F1C1C';
   font-size: 16px;
   font-style: normal;
   line-height: 22px;
   font-weight: 400;
   text-align: center;
   font-family: var(--base-font);
   margin: 18px 62px;
`

const StyledFooter = styled.footer`
   display: flex;
   justify-content: center;
   margin-top: 30px;
   div {
      display: flex;
      justify-content: space-around;
   }
`
const button = {
   marginRight: '12px',
}

export const ConfirmModal = ({ isActive, toggleModal, deleteHandler }) => {
   const handleClose = () => {
      toggleModal()
   }

   const handleDelete = () => {
      deleteHandler()
   }
   return (
      <>
         <Backdrop
            sx={{
               zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
            open={isActive}
            onClick={handleClose}
         >
            <CircularProgress color="inherit" />
         </Backdrop>
         <Modal
            open={isActive}
            onClose={handleDelete}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
         >
            <Box sx={style}>
               <StyledHeaderTitle>
                  Вы уверены, что хотите удалить группу...?
               </StyledHeaderTitle>
               <StyledFooter>
                  <div>
                     <Buttons
                        width="108px"
                        background="#fffff"
                        fontcolor="#3772FF"
                        border="1px solid #3772FF"
                        type="button"
                        onClick={handleClose}
                        sx={button}
                        hoverback="none"
                     >
                        Отмена
                     </Buttons>
                     <Buttons
                        width="108px"
                        background="#C91E1E"
                        type="button"
                        onClick={handleDelete}
                        hoverBack="none"
                     >
                        Удалить
                     </Buttons>
                  </div>
               </StyledFooter>
            </Box>
         </Modal>
      </>
   )
}

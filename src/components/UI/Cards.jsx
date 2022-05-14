import React, { useState } from 'react'
import styled from 'styled-components'
import { Title } from './Title'
import { MeetBalls } from './MeetBalls'
import DefaultCardImage from '../../assets/images/DefaultCardImage.png'

export const Cards = ({
   image,
   title,
   duration,
   description,
   onCardClick,
   cardId,
   option,
}) => {
   const [anchorEl, setAnchorEl] = useState(null)
   const open = Boolean(anchorEl)
   const clickHandler = (event) => {
      setAnchorEl(event.currentTarget)
   }
   const closeHandler = () => {
      setAnchorEl(null)
   }
   const actionHandler = (action) => {
      action({ id: cardId })
      closeHandler()
   }
   return (
      <Card onClick={onCardClick}>
         {image ? (
            <WrapperImg src={image} alt="foto" />
         ) : (
            <WrapperImg src={DefaultCardImage} alt="foto" />
         )}

         <WrapperGroupTitle>
            <Title
               lineHeight="25px"
               fontWeight="600, bold"
               fontSize="18px"
               color="#1D293F"
            >
               {title}
            </Title>
            <Title
               lineHeight="140.1%"
               fontWeight="400"
               fontSize="12px"
               color="#1D293F"
            >
               {duration}
            </Title>
         </WrapperGroupTitle>
         <WrapperInfoGroup>
            <InfoGroup
               lineHeight="16px"
               fontWeight="400"
               fontSize="16px"
               color="#1D293F"
            >
               {description}
            </InfoGroup>
         </WrapperInfoGroup>
         <WrapperOptionsIcon>
            <MeetBalls
               open={open}
               handleClick={clickHandler}
               handleClose={closeHandler}
               anchorEl={anchorEl}
               onAction={actionHandler}
               option={option}
            />
         </WrapperOptionsIcon>
      </Card>
   )
}
const Card = styled.div`
   width: 250px;
   height: 311px;
   display: flex;
   flex-direction: column;
   background: #ffffff;
   border: 1px solid #d4d4d4;
   box-sizing: border-box;
   border-radius: 10px;
   cursor: pointer;
`
const WrapperImg = styled.img`
   width: 100%;
   min-height: 171px;
   border-top-left-radius: 10px;
   cursor: pointer;
   border-top-right-radius: 10px;
`
const WrapperGroupTitle = styled.div`
   min-width: 100%;
   display: flex;
   justify-content: space-between;
   align-items: center;
   cursor: pointer;
   p {
      margin: 16px 18px 5px 18px;
      cursor: pointer;
   }
`
const WrapperInfoGroup = styled.div`
   min-width: 236px;
   height: 60px;
   cursor: pointer;
`
const InfoGroup = styled(Title)`
   width: 240px;
   max-height: 62px;
   padding: 0 18px 8px 18px;
   overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 3;
   -webkit-box-orient: vertical;
   cursor: pointer;
`
const WrapperOptionsIcon = styled.div`
   display: flex;
   justify-content: end;
   margin: 8px 21px 13px;
   cursor: pointer;
`

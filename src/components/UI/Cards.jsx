import React, { useState } from 'react'
import styled from 'styled-components'
import { IoIosArrowDown } from 'react-icons/io'
import { Title } from './Title'
import media from '../../utils/helpers/media'
import { MeetBalls } from './MeetBalls'

import DefaultCardImage from '../../assets/images/DefaultCardImage.png'

export const Cards = ({
   image,
   title,
   duration,
   description,
   onCardClick,
   option,
   allInformation,
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
      action(allInformation)
      closeHandler()
   }
   return (
      <Card>
         {image ? (
            <WrapperImg onClick={onCardClick} src={image} alt="foto" />
         ) : (
            <WrapperImg
               onClick={onCardClick}
               src={DefaultCardImage}
               alt="foto"
            />
         )}

         <WrapperGroupTitle onClick={onCardClick}>
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
         <ArrowIcon />
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
   display: flex;
   flex-direction: column;
   background: #ffffff;
   border: 1px solid #d4d4d4;
   box-sizing: border-box;
   border-radius: 10px;
   cursor: pointer;
   ${media.mobile`
      width:100%;
      height: auto;
      padding: 5px;
      display: flex;
      flex-direction: row;
   `}
`
const ArrowIcon = styled(IoIosArrowDown)`
   display: none;
   ${media.mobile`
      display: block;
       align-items: center;
   `}
`
const WrapperImg = styled.img`
   width: 100%;
   height: 171px;
   border-top-left-radius: 10px;
   cursor: pointer;
   border-top-right-radius: 10px;
   ${media.mobile`
      display: none;
      height: 40px;
   `}
`
const WrapperGroupTitle = styled.div`
   min-width: 95%;
   display: flex;
   justify-content: space-between;
   align-items: center;
   cursor: pointer;
   p {
      margin: 16px 18px 5px 18px;
      cursor: pointer;
      ${media.mobile`
         margin:0;
         width: 95%;
      `}
   }
   ${media.mobile`
      flex-direction: column;
      align-items: start;
      min-width: 95%;

   `}
`
const WrapperInfoGroup = styled.div`
   min-width: 236px;
   height: 60px;
   cursor: pointer;
   ${media.mobile`
      display: none;
   `}
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
   ${media.mobile`
      display: none;
   `}
`
const WrapperOptionsIcon = styled.div`
   display: flex;
   justify-content: end;
   margin: 8px 21px 13px;
   cursor: pointer;
   ${media.mobile`
      display: none;
   `}
`

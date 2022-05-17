import React, { useEffect, useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import styled from 'styled-components'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { Buttons } from '../../UI/Buttons'
import { FlexCards } from '../../UI/FlexCards'
import { Cards } from '../../UI/Cards'
import { ReactComponent as FixIcon } from '../../../assets/icons/FixIcon.svg'
import { ReactComponent as EditIcon } from '../../../assets/icons/EditIcon.svg'
import { ReactComponent as Trash } from '../../../assets/icons/TrashBin.svg'
import { getCourseList } from '../../../store/courseSlice'
import { BasicPagination } from '../../UI/BasicPagination'
import { ConditionalRender } from '../../UI/ConditionalRender'
import { GroupModal } from './CourseModal'

export const CoursePanel = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   useEffect(() => {
      dispatch(getCourseList())
   }, [])
   const { courses, pages } = useSelector((store) => store.course)

   const [isActive, setIsActive] = useState({
      action: null,
      groupInformation: {},
   })

   const modalHandler = (item) => {
      setIsActive(item)
   }
   const closeModalHandler = () => {
      setIsActive({
         action: null,
         groupInformation: {},
      })
   }
   const openInnerPage = (id) => {
      navigate(`${id}`)
   }

   const option = [
      {
         id: Math.random().toString(),
         action: (groupInformation) => {
            modalHandler({
               action: 'appoint',
               groupInformation,
            })
         },
         content: (
            <>
               <FixIcon style={{ marginRight: '20px' }} />
               Назначить учителя
            </>
         ),
      },
      {
         id: Math.random().toString(),
         action: (groupInformation) => {
            modalHandler({
               action: 'edit',
               groupInformation,
            })
         },
         content: (
            <>
               <EditIcon style={{ marginRight: '20px' }} />
               Редактировать
            </>
         ),
      },
      {
         id: Math.random().toString(),
         action: (groupInformation) => {
            modalHandler({
               action: 'delete',
               id: groupInformation.id,
            })
         },
         content: (
            <>
               <Trash style={{ marginRight: '20px' }} />
               Удалить
            </>
         ),
      },
   ]

   return (
      <Wrapper>
         <Flex>
            <Buttons
               onClick={() => {
                  modalHandler({
                     action: 'addCourse',
                  })
               }}
            >
               <AiOutlinePlus fontSize="18px" /> Создать курс
            </Buttons>
         </Flex>
         <FlexCards>
            {courses.map((el) => (
               <Cards
                  onCardClick={() => openInnerPage(el.id)}
                  key={el.id}
                  title={el.courseName}
                  image={el.image}
                  description={el.description}
                  duration={el.dateOfFinish}
                  cardId={el.id}
                  option={option}
                  allInformation={el}
               />
            ))}
         </FlexCards>
         <ConditionalRender pages={pages}>
            <StyledFooter>
               <BasicPagination pages={pages} />
            </StyledFooter>
         </ConditionalRender>
         <GroupModal
            isActive={isActive}
            onCloseModal={closeModalHandler}
            // editPhoto={editGroupModalImage}
            // sendPhoto={createGroupModalImage}
            // onCreatePhoto={createPhotoHandler}
            // onEditPhoto={editPhotoHandler}
         />
      </Wrapper>
   )
}

const StyledFooter = styled.footer`
   margin-left: 50vh;
   margin-top: 30px;
`
const Wrapper = styled.div`
   padding-top: 24px;
   height: 100%;
   width: 100%;
   display: flex;
   flex-direction: column;
`
const Flex = styled.div`
   display: flex;
   justify-content: end;
`

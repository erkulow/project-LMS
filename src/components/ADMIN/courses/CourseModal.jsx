import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { BasicModal } from '../../UI/BasicModal'
import { ConfirmModal } from '../../UI/ConfirmModal'
import { ImagePicker } from '../../UI/ImagePicker'
import { Inputs } from '../../UI/Input'
import { MultiSelect } from '../../UI/MultiSelect'
import { CustomDatePicker } from '../../UI/CustomDatePicker'
import {
   deleteCourse,
   getCourseList,
   createCourse,
   sendPhoto,
} from '../../../store/courseSlice'
import { useInput } from '../../../hooks/useInput'
import { convertDate } from '../../../utils/helpers/convertDate'

export const GroupModal = ({ isActive, onCloseModal }) => {
   const dispatch = useDispatch()
   const deleteHandler = async (id) => {
      await dispatch(deleteCourse(id))
      dispatch(getCourseList())
      onCloseModal()
   }
   const [createCourseModalImage, setCreateCourseModalImage] = useState({
      frontImage: '',
      backImage: null,
   })
   const [createCourseModalDate, setCreateCourseModalDate] = useState()
   const [createCourseModalData, onChangeCreateCourseModalData] = useInput({
      courseName: '',
      description: '',
   })
   const [editCourseModalImage, setEditCourseModalImage] = useState()
   const [editCourseModalDate, setEditCourseModalDate] = useState()
   const [editCourseModalData, setEditCourseModalData] = useInput({})

   const createPhotoHandler = (photo) => {
      setCreateCourseModalImage({
         frontImage: URL.createObjectURL(photo),
         backImage: photo,
      })
   }

   const editPhotoHandler = (photo) => {
      setEditCourseModalImage({
         frontImage: URL.createObjectURL(photo),
         backImage: photo,
      })
   }
   const editHandler = () => {}

   const createHandler = async () => {
      const { URL } = await dispatch(
         sendPhoto(createCourseModalImage.backImage)
      ).unwrap()
      dispatch(
         createCourse({
            ...createCourseModalData,
            dateOfFinish: convertDate(createCourseModalDate),
            image: URL,
         })
      )
      onCloseModal()
   }

   if (isActive.action === 'addCourse') {
      return (
         <BasicModal
            title="Создать  курс"
            isActive={!!isActive}
            cancelTitle="Отмена"
            successTitle="Добавить"
            isActiveFooter="true"
            modalCloseHanlder={onCloseModal}
            addHandler={createHandler}
         >
            <ImagePicker
               image={createCourseModalImage.frontImage}
               getPhoto={createPhotoHandler}
            />
            <FlexInput>
               <Inputs
                  value={createCourseModalData.title}
                  onChange={(e) => onChangeCreateCourseModalData(e)}
                  name="courseName"
                  width="327"
                  placeholder="Название курса"
               />
               <CustomDatePicker
                  value={createCourseModalDate}
                  setDate={setCreateCourseModalDate}
                  width="149px"
               />
            </FlexInput>
            <Textarea
               value={createCourseModalData.description}
               onChange={(e) => onChangeCreateCourseModalData(e)}
               name="description"
               placeholder="Описание курса"
            />
         </BasicModal>
      )
   }
   if (isActive.action === 'appoint') {
      return (
         <BasicModal
            title="Назначить учителя"
            isActive={!!isActive}
            cancelTitle="Отмена"
            successTitle="Добавить"
            isActiveFooter="true"
            modalCloseHanlder={onCloseModal}
            addHandler={editHandler}
         >
            <MultiSelect />
         </BasicModal>
      )
   }
   if (isActive.action === 'edit') {
      return (
         <BasicModal
            title="Pедактировать"
            isActive={!!isActive}
            cancelTitle="Отмена"
            successTitle="Добавить"
            isActiveFooter="true"
            modalCloseHanlder={onCloseModal}
            addHandler={editHandler}
         >
            <ImagePicker
               image={editCourseModalImage.frontImage}
               getPhoto={editPhotoHandler}
            />
            <FlexInput>
               <Inputs
                  name="courseName"
                  value={editCourseModalData.title}
                  onChange={(e) => setEditCourseModalData(e)}
                  width="327"
                  placeholder="Название курса"
               />
               <CustomDatePicker
                  value={editCourseModalDate}
                  setDate={setEditCourseModalDate}
                  width="149px"
               />
            </FlexInput>
            <Textarea
               name="description"
               value={editCourseModalData.description}
               onChange={(e) => setEditCourseModalData(e)}
               placeholder="Описание курса"
            />
         </BasicModal>
      )
   }
   if (isActive.action === 'delete') {
      return (
         <ConfirmModal
            isActive={!!isActive}
            deleteHandler={() => deleteHandler(isActive.id)}
            toggleModal={onCloseModal}
         />
      )
   }
   return null
}

const FlexInput = styled.div`
   display: flex;
   justify-content: space-between;
   margin-top: 25px;
`
const Textarea = styled.textarea`
   width: 491px;
   height: 123px;
   resize: none;
   margin-top: 12px;
   border-radius: 10px;
   outline: none;
   padding: 10px 18px;
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 22px;
   color: var(--base-font);
   border: 1px solid #d4d4d4;
   ::placeholder {
      color: #8d949e;
   }
   :focus {
      border: 1px solid #3772ff;
   }
`

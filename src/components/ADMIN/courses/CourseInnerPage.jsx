import React from 'react'
import styled from 'styled-components'
import Buttons from '@mui/material/IconButton/IconButton'
import { Table } from '../../UI/Table'
import { ReactComponent as EyeIcon } from '../../../assets/icons/EyesForTable.svg'
import { ReactComponent as EditIcon } from '../../../assets/icons/EditIconForTable.svg'
import { ReactComponent as TrashBinIcon } from '../../../assets/icons/TrashBinForTable.svg'

export const CourseInnerPage = () => {
   const DATA_COLLUMN = [
      {
         title: 'ID',
         accessKey: 'id',
      },
      {
         title: 'Имя Фамилия',
         accessKey: 'name',
      },
      {
         title: 'Формат обучения',
         accessKey: 'format',
      },
      {
         title: 'Номер телефона',
         accessKey: 'mobile_phone',
      },
      {
         title: 'E-Mail',
         accessKey: 'email',
      },
      {
         title: 'Действие',
         accessKey: '',
         action: (item) => {
            return (
               <WrapperIcons>
                  <Buttons
                     onClick={() => {
                        console.log(item.id)
                     }}
                     style={{ background: 'none' }}
                  >
                     <EyeIcon />
                  </Buttons>
                  <Buttons style={{ background: 'none' }}>
                     <EditIcon />
                  </Buttons>
                  <Buttons style={{ background: 'none' }}>
                     <TrashBinIcon />
                  </Buttons>
               </WrapperIcons>
            )
         },
      },
   ]
   const DATA = [
      {
         id: 1,
         name: 'Anna Karimova ',
         format: 'Онлайн',
         mobile_phone: '0777114676  ',
         email: 'John@gmail.com',
      },
      {
         id: 2,
         name: 'Anna Karimova ',
         format: 'Онлайн',
         mobile_phone: '0777114676  ',
         email: 'John@gmail.com',
      },
      {
         id: 3,
         name: 'Anna Karimova ',
         format: 'Онлайн',
         mobile_phone: '0777114676  ',
         email: 'John@gmail.com',
      },
   ]
   return <Table headers={DATA_COLLUMN} data={DATA} />
}
const WrapperIcons = styled.div`
   width: 20vh;
   display: flex;
   justify-content: space-between;
   align-items: center;
   & > * {
      &:hover {
         cursor: pointer;
         color: blue;
      }
   }
`

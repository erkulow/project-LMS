import React, { useCallback } from 'react'
import styled from 'styled-components'
import { useDropzone } from 'react-dropzone'
import { ReactComponent as DropZone } from '../../assets/icons/DropZone.svg'
import { Title } from './Title'

const StyledImagePicker = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   text-align: center;
`

const DropZoneWrapper = styled.div`
   margin-bottom: 20px;
`

export const ImagePicker = ({ getPhoto, image }) => {
   const onDrop = useCallback((acceptedFiles) => {
      getPhoto(acceptedFiles)
   }, [])
   const { getRootProps, getInputProps, isDragAccept, isDragReject } =
      useDropzone({
         onDrop,
         multiple: false,
         accept: 'image/jpeg,image/png',
      })
   return (
      <StyledImagePicker>
         <DropZoneWrapper {...getRootProps()}>
            <input type="text" {...getInputProps()} />
            <DropZone cursor="pointer" />
         </DropZoneWrapper>
         <Title fontSize="14" fontcolor="#8d949e">
            Нажмите на иконку чтобы <br /> загрузить или перетащите фото
         </Title>
      </StyledImagePicker>
   )
}

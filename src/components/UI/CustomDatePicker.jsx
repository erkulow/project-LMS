import React from 'react'
import styled from 'styled-components'
import TextField from '@mui/material/TextField'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import DatePicker from '@mui/lab/DatePicker'

const StyledDatePicker = styled(DatePicker)``

const StyledTextField = styled(TextField)`
   .MuiInputBase-root-MuiOutlinedInput-root {
      border-radius: 15px;
   }
`

export const CustomDatePicker = ({ value, setDate }) => {
   return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
         <StyledDatePicker
            value={value}
            onChange={(newValue) => {
               setDate(newValue)
            }}
            renderInput={(params) => (
               <StyledTextField
                  sx={{
                     '& .MuiOutlinedInput-root.Mui-focused': {
                        '& > fieldset': {
                           borderColor: 'black',
                           width: '256px',
                           height: '210px',
                        },
                     },
                  }}
                  border="none"
                  {...params}
               />
            )}
         />
      </LocalizationProvider>
   )
}

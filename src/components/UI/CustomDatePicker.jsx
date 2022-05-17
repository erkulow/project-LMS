import React from 'react'
import styled from 'styled-components'
import TextField from '@mui/material/TextField'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import DatePicker from '@mui/lab/DatePicker'
import ruLocale from 'date-fns/locale/ru'

const StyledDatePicker = styled(DatePicker)``

const StyledTextField = styled(TextField)`
   .MuiInputBase-root {
      border-radius: 15px;
      width: ${({ width }) => width || '250px'};
      height: 42px;
      color: gray;
      outline: none;
   }
`

export const CustomDatePicker = ({ value, setDate, width }) => {
   return (
      <LocalizationProvider locale={ruLocale} dateAdapter={AdapterDateFns}>
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
                           border: '1px solid #1d60ff',
                        },
                     },
                  }}
                  width={width}
                  border="none"
                  {...params}
                  inputProps={{
                     ...params.inputProps,
                     readOnly: true,
                     placeholder: 'дд.мм.гг',
                  }}
               />
            )}
         />
      </LocalizationProvider>
   )
}

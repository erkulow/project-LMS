import * as React from 'react'
import OutlinedInput from '@mui/material/OutlinedInput'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import styled from 'styled-components'
import { Box } from '@mui/material'
import Checkbox from '@mui/material/Checkbox'
import ListItemText from '@mui/material/ListItemText'
import { Title } from './Title'
import { SelectedItem } from './SelectedItem'
import { search } from '../../utils/helpers/helpers'

const StyledFormControl = styled(FormControl)`
   .MuiInputBase-root {
      border-radius: 10px;
      height: 42px;
      width: 491px;
   }
`
export const MultiSelect = ({ data = [], listTitle, value = [], setValue }) => {
   const [person, setPerson] = React.useState([])

   const handleChange = (event) => {
      const {
         target: { value },
      } = event
      setPerson(value)
   }

   const addHandler = () => {
      setValue((prev) => Array.from(new Set([...prev, ...person])))
      setPerson([])
   }

   const deleteHandler = (id) => {
      setValue(value.filter((selected) => selected.id !== id))
   }

   return (
      <Box>
         <Box>
            {value.map((user) => {
               return (
                  <SelectedItem
                     onDelete={() => deleteHandler(user.id)}
                     userInfo={user}
                  />
               )
            })}
         </Box>
         <StyledFormControl fullWidth>
            <Select
               multiple
               displayEmpty
               value={person}
               onChange={handleChange}
               onClose={addHandler}
               input={<OutlinedInput />}
               renderValue={(selected) => {
                  if (selected.length === 0) {
                     return <Title>Сlick to select a teacher </Title>
                  }
                  return selected.map((el) => el.name).join(',')
               }}
               inputProps={{ 'aria-label': 'Without label' }}
            >
               <MenuItem disabled value="">
                  <Title>{listTitle}</Title>
               </MenuItem>
               {search(data, value).length === 0 ? (
                  <MenuItem>
                     <ListItemText primary="EMPTY" />
                  </MenuItem>
               ) : (
                  search(data, value).map((user) => (
                     <MenuItem key={user.id} value={user}>
                        <ListItemText primary={user.name} />
                        <Checkbox checked={person.indexOf(user) > -1} />
                     </MenuItem>
                  ))
               )}
            </Select>
         </StyledFormControl>
      </Box>
   )
}

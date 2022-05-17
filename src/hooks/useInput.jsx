import { useState } from 'react'

export const useInput = (initialValue) => {
   const [value, setValue] = useState(initialValue)

   const handleChange = (event) => {
      setValue((prev) => {
         const { value, name } = event.target
         return {
            ...prev,
            [name]: value,
         }
      })
   }
   return [value, handleChange]
}

import { BASE_URL } from '../utils/constants/general'
import { getFromLocalStorage } from '../utils/helpers/helpers'
import { AUTH } from '../utils/constants/constants'

export const fileFetchApi = async (options) => {
   const user = getFromLocalStorage(AUTH)
   const fd = new FormData()

   try {
      const { path, file } = options

      const requestOptions = {
         method: 'POST',
         headers: {},
      }
      if (file) {
         fd.append('file', file)
         requestOptions.body = fd
      }

      if (user) {
         requestOptions.headers.Authorization = `Bearer ${user.token}`
      }

      const response = await fetch(`${BASE_URL}/${path}`, requestOptions)
      if (!response.ok) {
         throw new Error('Some thing went wrong')
      }
      return response.json()
   } catch (e) {
      throw new Error(e.message)
   }
}

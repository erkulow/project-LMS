import { BASE_URL } from '../utils/constants/general'
import { getFromLocalStorage } from '../utils/helpers/helpers'
import { AUTH } from '../utils/constants/constants'

export const baseFetch = async (options) => {
   const user = getFromLocalStorage(AUTH)

   try {
      const { path, body, method, params } = options
      let url = path

      const requestOptions = {
         method: method || 'GET',
         headers: { 'Content-Type': 'application/json' },
      }

      if (method !== 'GET') {
         requestOptions.body = JSON.stringify(body || {})
      }
      if (user) {
         requestOptions.headers.Authorization = `Bearer ${user.token}`
      }

      if (params) {
         const queryParamsStringValue = Object.keys(params)
            .map((paramKey) => `${paramKey}=${params[paramKey]}`)
            .join('&')

         url = `${path}?${queryParamsStringValue}`
      }

      const response = await fetch(`${BASE_URL}/${url}`, requestOptions)
      if (!response.ok) {
         throw new Error('Some thing went wrong')
      }
      return response.json()
   } catch (e) {
      throw new Error(e.message)
   }
}

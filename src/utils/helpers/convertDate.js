export const convertDate = (str) => {
   const date = new Date(str)
   const month = `0${date.getMonth() + 1}`.slice(-2)
   const day = ` 0${date.getDate()}`.slice(-2)
   return [day, month, date.getFullYear()].join('-')
}

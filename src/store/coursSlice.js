import { createSlice } from '@reduxjs/toolkit'

const initState = {
   appointTeachers: [
      {
         name: 'Guni',
         id: 1,
      },
      {
         name: 'Baya',
         id: 2,
      },
      {
         name: 'Bars',
         id: 3,
      },
   ],
   coursesData: [
      {
         id: '1',
         image: 'https://akcdn.detik.net.id/community/media/visual/2022/03/15/silicon-valley-1_43.jpeg?w=480',
         title: 'React',
         description:
            'Silicon Valley is a global center of technological innovation located in the South San Francisco Bay Area of California',
         date: '20.09.22',
      },
      {
         id: '2',
         image: 'https://www.visittheusa.com/sites/default/files/styles/hero_l/public/images/hero_media_image/2016-10/Getty_591648687_Brand_City_SanFrancisco_Hero_FinalCrop.jpg?itok=UyHVZ5xx',
         title: 'React',
         description:
            'Silicon Valley is a global center of technological innovation located in the South San Francisco Bay Area of California',
         date: '20.09.22',
      },
      {
         id: '3',
         image: 'https://i0.wp.com/tiqets-cdn.s3.eu-west-1.amazonaws.com/wordpress/blog/wp-content/uploads/2020/03/22094311/San-Francisco-scaled.jpg?fit=2560%2C1707&ssl=1',
         title: 'React',
         description:
            'Silicon Valley is a global center of technological innovation located in the South San Francisco Bay Area of California',
         date: '20.09.22',
      },
      {
         id: '4',
         image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/1121098-pink-nature-wallpaper-1920x1080-lockscreen.jpg/1024px-1121098-pink-nature-wallpaper-1920x1080-lockscreen.jpg',
         title: 'React',
         description:
            'Silicon Valley is a global center of technological innovation located in the South San Francisco Bay Area of California',
         date: '20.09.22',
      },
   ],
   createCourse: [],
}
export const courseSlice = createSlice({
   name: 'cours',
   initialState: initState,
   reducers: {},
})

export const coursAction = courseSlice.actions

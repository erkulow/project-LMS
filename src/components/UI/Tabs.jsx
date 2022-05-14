import * as React from 'react'
import { styled } from '@mui/material/styles'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { useNavigate, useParams } from 'react-router-dom'

const StyledTabs = styled((props) => (
   <Tabs
      {...props}
      TabIndicatorProps={{
         children: <span className="MuiTabs-indicatorSpan" />,
      }}
   />
))({
   '& .MuiTabs-indicator': {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'transparent',
   },
   '& .MuiTabs-indicatorSpan': {
      maxWidth: 90,
      width: '100%',
      backgroundColor: '#3772FF',
      borderRadius: '5px 5px 0px 0px',
      height: '6px',
   },
})

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
   ({ theme }) => ({
      textTransform: 'none',
      fontFamily: 'Open Sans',
      fontWeight: 600,
      fontSize: '16px',
      lineHeight: '22px',
      marginRight: theme.spacing(3),
      color: '#000000',
      '&.Mui-selected': {
         color: '#3772FF',
      },
      '&.Mui-focusVisible': {
         backgroundColor: '#3772FF',
      },
   })
)

export const TabsTitle = ({ tabs }) => {
   const navigate = useNavigate()
   const [value, setValue] = React.useState(0)

   const handleChange = (event, newValue) => {
      setValue(newValue)
   }

   const params = useParams()
   // console.log(params) here you can get id params
   return (
      <StyledTabs
         value={value}
         onChange={handleChange}
         aria-label="styled tabs example"
      >
         {tabs.map((label) => (
            <StyledTab
               key={label.path}
               onClick={() => {
                  navigate(label.path)
               }}
               label={label.label}
            />
         ))}
      </StyledTabs>
   )
}

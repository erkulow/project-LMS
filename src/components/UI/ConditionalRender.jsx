export const ConditionalRender = ({ isActive, children }) => {
   return isActive ? children : null
}

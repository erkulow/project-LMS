import React, { forwardRef } from 'react'
import styled, { css } from 'styled-components'

export const Inputs = forwardRef((props, ref) => {
   return <StyledInput {...props} ref={ref} />
})
const StyledInput = styled.input`
   ${(
      props,
      {
         width,
         height,
         padding,
         margin,
         background,
         fontColor,
         border,
         borderRadius,
         hoverBack,
         boxShodow,
         errorBorder, // never=true, false=flase
      } = props
   ) =>
      css`
         outline: none;
         width: ${width || '491'}px;
         height: ${height || '42'}px;
         padding: ${padding || '10px 8px 10px 18px'} !important;
         margin: ${margin || ''} !important ;
         background-color: ${background || ''} !important;
         color: ${fontColor || 'var( --font-color)'} !important;
         border: ${border || '1px solid var(--grey-border-color)'} !important;
         border-color: ${errorBorder
            ? 'var(--error-color)'
            : '--grey-border-color'} !important;
         border-radius: ${borderRadius || '10'}px !important;
         &:hover {
            background-color: ${hoverBack || ''} !important;
         }
         &:focus {
            border-color: var(--blue-border-color) !important;
         }
         &:after {
            box-shadow: ${boxShodow || ''} !important;
         }
         &::placeholder {
            color: var(--placheholder-color) !important;
         }
         font-family: var(--base-font);
         font-style: normal;
         font-weight: 400;
         font-size: 16px;
         line-height: 22px;
      `}
`

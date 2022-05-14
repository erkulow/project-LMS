import * as React from 'react'
import Button from '@mui/material/Button'
import styled, { css } from 'styled-components'

export function Buttons(props) {
   const { children, onClick } = props
   return (
      <ButtonWrapper onClick={onClick} {...props}>
         {children}
      </ButtonWrapper>
   )
}

const ButtonWrapper = styled(Button)`
   ${(
      props,
      {
         width,
         height,
         padding,
         margin,
         background,
         fontcolor,
         border,
         borderRadius,
         hoverback,
         boxShodow,
         fontFamily,
         fontStyle,
         fontWeight,
         fontSize,
         lineHeight,
         letterSpacing,
      } = props
   ) =>
      css`
         width: ${width || '177'}px !important;
         height: ${height || '40'}px;
         padding: ${padding || '10px 24px'} !important;
         margin: ${margin || ''} !important ;
         background-color: ${background || 'var(--base-color)'} !important;
         border: ${border || 'none'}!important;
         border-radius: ${borderRadius || '8'}px !important;
         font-family: ${fontFamily || 'var(--base-font)'} !important;
         font-style: ${fontStyle || 'normal'} !important;
         color: ${fontcolor || 'var(--white-color)'} !important;
         font-weight: ${fontWeight || '600'} !important;
         font-size: ${fontSize || '14'}px !important;
         line-height: ${lineHeight || '20'}px !important;
         letter-spacing: ${letterSpacing || '0.001'}em !important;
         text-transform: none !important;
         &:hover {
            background-color: ${hoverback ||
            'var(--hover-blue-color)'} !important;
         }
         &:after {
            box-shadow: ${boxShodow || ''};
         }
         &:disabled {
            background-color: var(--disabled-background) !important;
            color: var(--disabled-font-color) !important;
            opacity: 0.9 !important;
         }
      `}
`

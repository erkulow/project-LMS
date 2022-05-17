import React from 'react'
import styled, { css } from 'styled-components'

export const Title = (props) => {
   const { children } = props
   return <TitleStyle {...props}>{children}</TitleStyle>
}
const TitleStyle = styled.p`
   ${(
      props,
      {
         margin,
         cursor,
         fontFamily,
         fontStyle,
         fontcolor,
         fontWeight,
         fontSize,
         lineHeight,
         letterSpacing,
      } = props
   ) =>
      css`
         margin: ${margin || ''}px !important;
         font-family: ${fontFamily || 'var(--base-font)'} !important;
         font-style: ${fontStyle || 'normal'} !important;
         color: ${fontcolor || 'var(--font-color)'} !important;
         font-weight: ${fontWeight || '600'} !important;
         font-size: ${fontSize || '12'}px !important;
         line-height: ${lineHeight || '16'}px !important;
         letter-spacing: ${letterSpacing || '0.001'}em !important;
         text-transform: none;
         cursor: ${cursor || ''};
      `}
`

import React from 'react'
import styled from 'styled-components'

export function Table({ data, headers }) {
   const headerOfTable = headers.map((header) => (
      <th key={header.title}>{header.title}</th>
   ))
   const bodyOfTable = data.map((row) => (
      <tr key={row.id}>
         {headers.map((column) => {
            return (
               <td key={column.accessKey}>
                  {row[column.accessKey]}
                  {column.action ? column.action(row) : ''}
               </td>
            )
         })}
      </tr>
   ))
   return (
      <WraperForTable>
         <StyledTable cellPadding={0} cellSpacing={0}>
            <Thead>
               <tr>{headerOfTable}</tr>
            </Thead>
            <Tbody>{bodyOfTable}</Tbody>
         </StyledTable>
      </WraperForTable>
   )
}
const WraperForTable = styled.div`
   min-height: 86.3vh;
   min-height: 94.5vh;
   background-color: #fff;
   border-radius: 10px;
   border: 1px solid silver;
   padding-top: 8px;
   margin-top: 50px;
   width: 100%;
`
const StyledTable = styled.table`
   background-color: #eff0f6;
   font-family: var(--base-font);
   font-style: normal;
   color: #1d293f;
`
const Thead = styled.thead`
   font-weight: 400;
   font-size: 14px;
   line-height: 19px;
   width: 100%;
   th {
      white-space: nowrap;
      padding: 0.8rem 1rem;
      text-align: left;
      background-color: #ffffff;
      outline: none;
      border-bottom: 1px solid silver;
   }
`
const Tbody = styled.tbody`
   font-weight: 400;
   font-size: 16px;
   line-height: 22px;
   tbody,
   tr:nth-child(odd) {
      background-color: white;
   }
   td {
      white-space: nowrap;
      width: 20%;
      overflow-wrap: break-word;
      padding: 0.5rem;
      padding: 10px 30px 10px 20px;
   }
`

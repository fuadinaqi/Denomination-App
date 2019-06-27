import styled from 'styled-components'

const TableContainer = styled.table`
  margin-top: 8px !important;
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: calc(100% - 16px);
  text-align-last: center;

  td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
`

export {
  TableContainer
}

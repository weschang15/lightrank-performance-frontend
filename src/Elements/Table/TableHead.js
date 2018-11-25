import styled from "styled-components";

const TableHead = styled.thead`
  background-color: #f7f7f7;
  tr:hover:not(.no-hover) {
    background-color: inherit;
  }
  td {
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    color: #7c7c7c;
  }
`;

export default TableHead;

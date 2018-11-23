import styled from "styled-components";

const TableRow = styled.tr`
  border-bottom: 1px solid #eee;
  &:hover {
    background: #fafafa;
    td:last-of-type {
      > span {
        visibility: visible;
      }
    }
  }

  td:last-of-type {
    > span {
      visibility: hidden;
      font-size: 14px;
    }
  }
`;

export default TableRow;

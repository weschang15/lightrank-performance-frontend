import styled from "styled-components";

const TableRow = styled.tr`
  border-bottom: 1px solid #eee;
  &:hover:not(.no-hover) {
    background: #fafafa;
    td.invisible:last-of-type {
      > span {
        visibility: visible;
      }
    }
  }

  td.invisible:last-of-type {
    text-align: center;
    > span {
      visibility: hidden;
      font-size: 14px;
    }
  }
`;

export default TableRow;

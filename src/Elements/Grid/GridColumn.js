import styled from "styled-components";
import PropTypes from "prop-types";

const GridColumn = styled.div`
  grid-column: ${({ columnFill, columnStart, columnEnd }) =>
    `${columnStart} / ${columnEnd ? columnEnd : columnFill + columnStart}`};
`;

GridColumn.propTypes = {
  columnFill: PropTypes.number.isRequired,
  columnStart: PropTypes.number
};

GridColumn.defaultProps = {
  columnFill: 1,
  columnStart: 1,
  columnEnd: -1
};

export default GridColumn;

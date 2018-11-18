import styled from "styled-components";
import PropTypes from "prop-types";

const ListItem = styled.li`
  font-size: ${props => props.size};
  margin-bottom: 0.75em;
  &:last-of-type {
    margin: 0;
  }
`;

ListItem.propTypes = {
  size: PropTypes.string.isRequired
};

ListItem.defaultProps = {
  size: "1em"
};

export default ListItem;

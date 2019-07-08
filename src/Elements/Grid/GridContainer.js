import styled from "styled-components";
import PropTypes from "prop-types";

const GridContainer = styled.div`
  ${({ alignItemsCenter }) => alignItemsCenter && `align-items: center;`}
  margin: 1em;
  display: grid;
  grid-auto-columns: fill;
  grid-column-gap: 2em;
  grid-template-columns: repeat(${({ minColumCount }) => minColumCount}, 1fr);
  ${({ justifyContentCenter }) =>
    justifyContentCenter && `justify-content: center;`}
  margin: 1em;

  @media only screen and (min-width: 24em) {
    grid-template-columns: repeat(
      ${({ mobileColumCount }) => mobileColumCount},
      1fr
    );
  }

  @media only screen and (min-width: 48em) {
    grid-template-columns: repeat(
      ${({ tabletColumnCount }) => tabletColumnCount},
      1fr
    );
  }

  @media only screen and (min-width: 64em) {
    grid-template-columns: repeat(
      ${({ desktopColumnCount }) => desktopColumnCount},
      1fr
    );
  }
`;

GridContainer.propTypes = {
  alignItemsCenter: PropTypes.bool,
  desktopColumnCount: PropTypes.number.isRequired,
  justifyContentCenter: PropTypes.bool,
  minColumCount: PropTypes.number.isRequired,
  mobileColumCount: PropTypes.number.isRequired,
  tabletColumnCount: PropTypes.number.isRequired
};

GridContainer.defaultProps = {
  desktopColumnCount: 10,
  minColumCount: 4,
  mobileColumCount: 6,
  tabletColumnCount: 8
};

export default GridContainer;

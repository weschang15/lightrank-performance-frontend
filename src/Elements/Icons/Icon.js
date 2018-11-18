import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Icon = ({ name, color, ...rest }) => {
  switch (name) {
    case "dashboard":
      return (
        <Graphic
          {...rest}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm-5.6-4.29a9.95 9.95 0 0 1 11.2 0 8 8 0 1 0-11.2 0zm6.12-7.64l3.02-3.02 1.41 1.41-3.02 3.02a2 2 0 1 1-1.41-1.41z" />
        </Graphic>
      );
    case "folder":
      return (
        <Graphic
          {...rest}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M0 4c0-1.1.9-2 2-2h7l2 2h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2 2v10h16V6H2z" />
        </Graphic>
      );
    case "chart":
      return (
        <Graphic
          {...rest}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M4.13 12H4a2 2 0 1 0 1.8 1.11L7.86 10a2.03 2.03 0 0 0 .65-.07l1.55 1.55a2 2 0 1 0 3.72-.37L15.87 8H16a2 2 0 1 0-1.8-1.11L12.14 10a2.03 2.03 0 0 0-.65.07L9.93 8.52a2 2 0 1 0-3.72.37L4.13 12zM0 4c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4z" />
        </Graphic>
      );
    case "user":
      return (
        <Graphic
          {...rest}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M5 5a5 5 0 0 1 10 0v2A5 5 0 0 1 5 7V5zM0 16.68A19.9 19.9 0 0 1 10 14c3.64 0 7.06.97 10 2.68V20H0v-3.32z" />
        </Graphic>
      );
    case "cog":
      return (
        <Graphic
          {...rest}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M3.94 6.5L2.22 3.64l1.42-1.42L6.5 3.94c.52-.3 1.1-.54 1.7-.7L9 0h2l.8 3.24c.6.16 1.18.4 1.7.7l2.86-1.72 1.42 1.42-1.72 2.86c.3.52.54 1.1.7 1.7L20 9v2l-3.24.8c-.16.6-.4 1.18-.7 1.7l1.72 2.86-1.42 1.42-2.86-1.72c-.52.3-1.1.54-1.7.7L11 20H9l-.8-3.24c-.6-.16-1.18-.4-1.7-.7l-2.86 1.72-1.42-1.42 1.72-2.86c-.3-.52-.54-1.1-.7-1.7L0 11V9l3.24-.8c.16-.6.4-1.18.7-1.7zM10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
        </Graphic>
      );
    case "power":
      return (
        <Graphic
          {...rest}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path fillRule="evenodd" d="M4.16 4.16l1.42 1.42A6.99 6.99 0 0 0 10 18a7 7 0 0 0 4.42-12.42l1.42-1.42a9 9 0 1 1-11.69 0zM9 0h2v8H9V0z"/>
        </Graphic>
      );
    case "logo":
      return (
        <Graphic
          {...rest}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 122 122"
        >
          <g transform="translate(-10 -10)" fill="none" fillRule="evenodd">
            <rect
              fill="#FBF5F3"
              transform="rotate(45 71 71)"
              x="21"
              y="21"
              width="100"
              height="100"
              rx="24"
            />
            <path
              d="M85.07 72.557l-19.786 23.37s-.96 1.473-2.433 1.473c-4.674 0-1.473-5.763-2.369-3.65l8.196-20.617H58.625A2.597 2.597 0 0 1 56 70.508c0-1.025.384-1.473.384-1.473L77.001 45.41C77.578 44.64 78.282 44 79.306 44a2.597 2.597 0 0 1 2.626 2.625c0 .576-1.665 4.738-1.665 4.866L74.12 68.075h9.156a2.597 2.597 0 0 1 2.625 2.625c-.128.64-.448 1.409-.832 1.857z"
              fill="#272838"
              fillRule="nonzero"
            />
          </g>
        </Graphic>
      );

    default:
      return (
        <Graphic
          {...rest}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M8 20H3V10H0L10 0l10 10h-3v10h-5v-6H8v6z" />
        </Graphic>
      );
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  withCursor: PropTypes.bool,
  color: PropTypes.string
};

Icon.defaultProps = {
  name: "",
  size: "20px",
  color: "#272838"
};

const Graphic = styled.svg`
  height: ${props => props.size};
  width: ${props => props.size};
  fill: ${props => props.color};
  display: inherit;
`;

export default Icon;

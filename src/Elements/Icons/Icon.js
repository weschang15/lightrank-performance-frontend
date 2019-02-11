import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Icon = ({ name, ...rest }) => {
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
          <path
            fillRule="evenodd"
            d="M4.16 4.16l1.42 1.42A6.99 6.99 0 0 0 10 18a7 7 0 0 0 4.42-12.42l1.42-1.42a9 9 0 1 1-11.69 0zM9 0h2v8H9V0z"
          />
        </Graphic>
      );
    case "checkmark":
      return (
        <Graphic
          {...rest}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM6.7 9.29L9 11.6l4.3-4.3 1.4 1.42L9 14.4l-3.7-3.7 1.4-1.42z" />
        </Graphic>
      );
    case "close":
      return (
        <Graphic
          {...rest}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm1.41-1.41A8 8 0 1 0 15.66 4.34 8 8 0 0 0 4.34 15.66zm9.9-8.49L11.41 10l2.83 2.83-1.41 1.41L10 11.41l-2.83 2.83-1.41-1.41L8.59 10 5.76 7.17l1.41-1.41L10 8.59l2.83-2.83 1.41 1.41z" />
        </Graphic>
      );
    case "repeat":
      return (
        <Graphic
          {...rest}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M10 3v2a5 5 0 0 0-3.54 8.54l-1.41 1.41A7 7 0 0 1 10 3zm4.95 2.05A7 7 0 0 1 10 17v-2a5 5 0 0 0 3.54-8.54l1.41-1.41zM10 20l-4-4 4-4v8zm0-12V0l4 4-4 4z"/>
        </Graphic>
      );
    case "google":
      return (
        <Graphic
          size={rest.size}
          enableBackground="new 0 0 128 128"
          viewBox="0 0 128 128"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipRule="evenodd">
            <path d="m0 0h128v128h-128z" fill="none" />
            <g fillRule="evenodd">
              <path
                d="m27.585 64c0-4.157.69-8.143 1.923-11.881l-21.57-16.471c-4.204 8.535-6.572 18.153-6.572 28.352 0 10.191 2.366 19.802 6.563 28.332l21.558-16.503c-1.221-3.721-1.902-7.692-1.902-11.829"
                fill="#fbbc05"
              />
              <path
                d="m65.457 26.182c9.031 0 17.188 3.2 23.597 8.436l18.644-18.618c-11.361-9.891-25.927-16-42.241-16-25.328 0-47.096 14.484-57.519 35.648l21.569 16.471c4.97-15.086 19.137-25.937 35.95-25.937"
                fill="#ea4335"
              />
              <path
                d="m65.457 101.818c-16.812 0-30.979-10.851-35.949-25.937l-21.57 16.468c10.423 21.167 32.191 35.651 57.519 35.651 15.632 0 30.557-5.551 41.758-15.951l-20.474-15.828c-5.777 3.639-13.052 5.597-21.284 5.597"
                fill="#34a853"
              />
              <path
                d="m126.634 64c0-3.782-.583-7.855-1.457-11.636h-59.72v24.727h34.376c-1.719 8.431-6.397 14.912-13.092 19.13l20.474 15.828c11.766-10.92 19.419-27.188 19.419-48.049"
                fill="#4285f4"
              />
            </g>
          </g>{" "}
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
  ${props => (props.withCursor ? "cursor: pointer;" : null)}
`;

export default Icon;

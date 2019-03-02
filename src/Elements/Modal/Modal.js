import React, { Component } from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import { Portal, primaryTheme } from "Utilities";
import Icon from "../Icons/Icon";

export default class Modal extends Component {
  static propTypes = {
    on: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired
  };

  componentDidMount = () => {
    document.body.style.overflow = "hidden";
  };

  componentWillUnmount = () => {
    document.body.removeAttribute("style");
  };

  render() {
    const { children, on, toggle } = this.props;

    return (
      on && (
        <ThemeProvider theme={primaryTheme}>
          <Portal>
            <ModalWrapper>
              <ModalCard>
                <Icon name="close" onClick={toggle} size="20px" withCursor />
                {children}
              </ModalCard>
            </ModalWrapper>
          </Portal>
        </ThemeProvider>
      )
    );
  }
}

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.25);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em;
  z-index: 9999999;
`;

const ModalCard = styled.div`
  flex: 1;
  max-width: 480px;
  position: relative;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 3px;
  padding: 1em;
`;

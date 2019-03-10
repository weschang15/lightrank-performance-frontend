import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Login, NewUser } from "Components";
import { Icon } from "Elements";
import { primaryTheme } from "Utilities";

export default class UserJoin extends Component {
  state = {
    isShowing: true
  };

  toggleTab = e => {
    const target = e.target;
    const parent = target.parentNode;
    const active = parent.querySelector(".js-is-active");

    if (target === active) {
      return;
    }

    active.classList.toggle("js-is-active");
    target.classList.toggle("js-is-active");

    this.setState({ isShowing: !this.state.isShowing });
  };

  render() {
    const {
      toggleTab,
      state: { isShowing }
    } = this;
    return (
      <ThemeProvider theme={primaryTheme}>
        <Section>
          <TabList>
            <TabItem
              onClick={toggleTab}
              className={isShowing && "js-is-active"}
            >
              Login
            </TabItem>
            <TabItem onClick={toggleTab}>Register with email</TabItem>
          </TabList>
          <Container>
            {isShowing ? <Login /> : <NewUser />}
            <SubHeader>Or Join with Services</SubHeader>
            <OauthContainer>
              <GoogleAuthButton href="/api/auth/google">
                <Icon name="google" size="1.6em" />
                <span>Login with Google</span>
              </GoogleAuthButton>
            </OauthContainer>
          </Container>
        </Section>
      </ThemeProvider>
    );
  }
}

const TabList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const TabItem = styled.li`
  display: inline-flex;
  padding: 0.5em 1.4em;
  background-color: transparent;
  user-select: none;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.weights.bold};
  color: ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) =>
    `${theme.borderRadius} ${theme.borderRadius} 0 0`};
  &.js-is-active {
    background-color: #fff;
    color: ${({ theme }) => theme.colors.black};
    border: 1px solid ${({ theme }) => theme.border};
    border-bottom: 0;
    z-index: 0;
  }
`;

const Section = styled.section``;

// const Header = styled.h4`
//   text-transform: uppercase;
//   letter-spacing: 0.025em;
//   margin: 0 0 1em;
// `;

const Container = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.25);
  max-width: 480px;
  width: 100%;
  padding: 1.4em;
`;

const SubHeader = styled.h5`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.light};
  text-align: center;
  letter-spacing: 0.025em;
`;

const OauthContainer = styled.div`
  text-align: center;
`;

const GoogleAuthButton = styled.a`
  border: 1px solid ${({ theme }) => theme.border};
  background-color: #fff;
  border-radius: ${({ theme }) => theme.borderRadius};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.dark};
  padding: 0.5em;
  display: inline-block;
  font-weight: ${({ theme }) => theme.weights.bold};
  line-height: 1;
  span,
  svg {
    display: inline-block;
    vertical-align: middle;
  }
  svg {
    margin-right: 10px;
  }
`;

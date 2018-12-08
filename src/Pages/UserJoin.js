import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import { NewUser, Login } from "Components";
import { Icon } from "Elements";
import { primaryTheme } from "Utilities";

export default class UserJoin extends Component {
  render() {
    return (
      <ThemeProvider theme={primaryTheme}>
        <Section>
          <Container>
            <Header>Login</Header>
            <Login />
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

const Section = styled.section``;

const Header = styled.h4`
  text-transform: uppercase;
  letter-spacing: 0.025em;
  margin: 0 0 1em;
`;

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

import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { darken, em } from "polished";
import HeroIllustration from "images/hero-illustration.svg";
import { mainTheme, columns } from "Utilities";
import { StackedForm, StandardInput, Button } from "Elements";

const Home = () => {
  const handleChange = e => {};
  const handleSubmit = e => {};

  return (
    <ThemeProvider theme={mainTheme}>
      <MainContainer>
        <Hero>
          <HeroContainer>
            <GridSection>
              <div>
                <Title>
                  <span>Light</span>Rank
                </Title>
                <p>
                  A monitoring platform that provides key metrics and solutions
                  for site performance, SEO, accessibility, and security.
                </p>
              </div>
              <Form>
                <Label htmlFor="baseUrl">
                  Generate your free report —
                  <Input
                    id="baseUrl"
                    name="baseUrl"
                    type="url"
                    value=""
                    placeholder="https://example.com"
                    onChange={handleChange}
                    withShadow
                  />
                </Label>
                <FormButton>Generate</FormButton>
              </Form>
            </GridSection>
            <GridSection>
              <figure>
                <img
                  src={HeroIllustration}
                  alt="LightRank dashboard illustration by Kate Kassab"
                />
              </figure>
            </GridSection>
          </HeroContainer>
        </Hero>
        <Section>
          <SectionHeader>
            <H2>
              The way site metrics are meant{" "}
              <Underlined>to be viewed</Underlined>
            </H2>
          </SectionHeader>
          <Grid>
            <GridSection>
              <Card>
                <CardTitle>Performance</CardTitle>
              </Card>
              <Card>
                <CardTitle>SEO</CardTitle>
              </Card>
              <Card>
                <CardTitle>Accessibility</CardTitle>
              </Card>
              <Card>
                <CardTitle>Security</CardTitle>
              </Card>
            </GridSection>
          </Grid>
        </Section>
      </MainContainer>
    </ThemeProvider>
  );
};

const Section = styled.section`
  padding: 2.25em 0;
`;

const SectionHeader = styled.header`
  padding: 1em;
  @media only screen and (min-width: 48em) {
    width: ${em(columns(4), 18)};
  }

  @media only screen and (min-width: 64em) {
    width: ${em(columns(4), 20)};
  }
`;

const Underlined = styled.span`
  background-image: linear-gradient(
    ${({ theme }) => theme.colors.lightGreen},
    ${({ theme }) => theme.colors.lightGreen}
  );
  background-repeat: no-repeat;
  background-size: 100% 0.5em;
  background-position: 0 90%;
`;

const H2 = styled.h2`
  font-size: 1.75em;
  margin: 0 0 0.25em;
  @media only screen and (min-width: 48em) {
    ${Underlined} {
      display: inline-block;
    }
  }
`;

const GridSection = styled.div`
  padding: 1em;
  flex-basis: 100%;
  &:nth-of-type(2) {
    display: none;
  }

  @media only screen and (min-width: 30em) {
    flex-basis: ${em(columns(5, true), 18)};
    width: ${em(columns(5, true), 18)};
  }

  @media only screen and (min-width: 48em) {
    flex-basis: ${em(columns(4), 18)};
    width: ${em(columns(4), 18)};
    &:nth-of-type(2) {
      flex-basis: ${em(columns(3), 18)};
      width: ${em(columns(3), 18)};
      display: block;
      figure {
        margin-left: 0;
        margin-right: 0;
      }
    }
  }

  @media only screen and (min-width: 64em) {
    flex-basis: ${em(columns(4), 20)};
    width: ${em(columns(4), 20)};
    &:nth-of-type(2) {
      flex-basis: ${em(columns(5), 20)};
      width: ${em(columns(5), 20)};
    }
  }
`;

const Card = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.shadows.primary}
  display: flex;
  justify-content: center;
  margin: 1em 0;
  min-height: 4em;
  padding: 0.5em;
  position: relative;
  width: 100%;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.black};
    transition: ${({ theme }) =>
      `${theme.transitions.speed.slow} background-color, ${
        theme.transitions.speed.slow
      } transform`};
    width: 100%;

    p:first-of-type {
      color: ${({ theme }) => theme.colors.green};
    }
  }

  @media only screen and (min-width: 30em) {
    width: ${em(392, 18)};
  }

  @media only screen and (min-width: 64em) {
    width: ${em(392, 20)};
  }
`;

const CardTitle = styled.p`
  font-weight: bold;
  margin: 0;
`;

const Grid = styled.div`
  display: flex;
  @media only screen and (min-width: 64em) {
    align-items: center;
    justify-content: space-between;
  }
`;

const Hero = styled(Section)`
  background: linear-gradient(#fcfcfc, #ededed);
  @media only screen and (min-width: 48em) {
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0% 100%);
  }
`;

const HeroContainer = styled(Grid)`
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
`;

const Title = styled.h1`
  line-height: 1.3
  margin: 0 0 0.25em;
  text-transform: uppercase;
  span {
    color: ${props => props.theme.colors.green};
  }

  @media only screen and (min-width: 30em) {
    font-size: 3.2em;
  }
`;

const MainContainer = styled.main`
  position: relative;
`;

const Form = styled(StackedForm)`
  @media only screen and (min-width: 30em) {
    align-items: flex-end;
    flex-direction: row;
  }
`;

const Label = styled.label`
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
  display: block;
  font-size: 14px;
  font-weight: bold;
  flex-grow: 1;
  transition: ${({ theme }) =>
    `${theme.transitions.speed.fast} color ${
      theme.transitions.easing.default
    }`};
  &:focus-within {
    color: #2491eb;
  }
`;

const Input = styled(StandardInput)`
  width: 100%;
`;

const FormButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.green};
  border: 1px solid ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.white};

  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.white},
      0 0 0 4px ${({ theme }) => theme.colors.green};
    outline: 0;
  }
  &:hover {
    background-color: ${({ theme }) => darken(0.05, theme.colors.green)};
  }
  &:active {
    background-color: ${({ theme }) => darken(0.15, theme.colors.green)};
    border-color: ${({ theme }) => darken(0.15, theme.colors.green)};
    transform: translateY(1px);
    transition: none;
  }

  @media only screen and (min-width: 30em) {
    margin: 0.5em;
  }
`;

export default Home;

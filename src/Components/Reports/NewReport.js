import React from "react";
import { Mutation } from "react-apollo";
import styled from "styled-components";
import { SectionContainer } from "Elements";
import NewReportForm from "./NewReportForm";
import { CREATE_REPORT } from "../../graphql";

const NewReport = () => {
  return (
    <Mutation mutation={CREATE_REPORT}>
      {createReport => {
        return (
          <Container>
            <Header>Generate a Report</Header>
            <Subtext>
              Submit a URL to start a new report. Feature in progress: automatic
              reports for same domain subpages.
            </Subtext>
            <NewReportForm onSubmit={createReport} />
          </Container>
        );
      }}
    </Mutation>
  );
};

const Header = styled.h2`
  text-transform: uppercase;
  color: #272838;
  letter-spacing: 0.015em;
  font-weight: 900;
  margin-bottom: 0;
`;

const Subtext = styled.p`
  color: #494950;
  margin: 0 0 2em;
`;

const Container = styled(SectionContainer)`
  margin-top: 0;
`;

export default NewReport;

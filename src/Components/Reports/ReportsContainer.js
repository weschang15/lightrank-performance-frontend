import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import styled from "styled-components";
import { SectionContainer } from "Elements";
import ReportList from "./ReportList";

class ReportsContainer extends Component {
  subscribe = (fn, projectId) => () =>
    fn({
      document: REPORT_SUBSCRIPTION,
      variables: {
        projectId
      },
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        const newReport = subscriptionData.data.report;
        const updatedQuery = {
          ...prev,
          reports: [...prev.reports, newReport]
        };

        return updatedQuery;
      }
    });
  render() {
    const { subscribe } = this;
    const {
      match: {
        params: { id }
      }
    } = this.props;

    return (
      <Query query={GET_REPORTS} variables={{ projectId: parseInt(id) }}>
        {({ data, loading, subscribeToMore }) => {
          if (loading) return null;
          return (
            <Container>
              <Header>Recent reports</Header>
              <ReportList
                data={data}
                subscribeToMore={subscribe(subscribeToMore, parseInt(id))}
              />
            </Container>
          );
        }}
      </Query>
    );
  }
}

const Header = styled.h3`
  text-transform: uppercase;
  color: #272838;
  letter-spacing: 0.005em;
  font-weight: 900;
`;

const Container = styled(SectionContainer)`
  margin-top: 0;
`;

const REPORT_SUBSCRIPTION = gql`
  subscription ReportAdded($projectId: Int!) {
    report: reportAdded(projectId: $projectId) {
      id
      url
    }
  }
`;

const GET_REPORTS = gql`
  query GetReports($projectId: Int!) {
    reports: getReports(projectId: $projectId) {
      id
      url
      completed
    }
  }
`;

export default withRouter(ReportsContainer);

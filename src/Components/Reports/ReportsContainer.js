import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Query } from "react-apollo";
import styled from "styled-components";
import { SectionContainer } from "Elements";
import ReportList from "./ReportList";
import { GET_REPORTS, REPORT_ADDED_SUBSCRIPTION } from "../../graphql";

class ReportsContainer extends Component {
  subscribe = (fn, projectId) => () =>
    fn({
      document: REPORT_ADDED_SUBSCRIPTION,
      variables: {
        projectId
      },
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        const newReport = subscriptionData.data.report;
        const updatedQuery = {
          ...prev.reports,
          ...prev.pageInfo,
          reports: {
            ...prev.reports,
            rows: [...prev.reports.rows, newReport]
          }
        };

        return updatedQuery;
      }
    });

  loadMore = (fn, projectId, list) => () =>
    fn({
      variables: {
        input: {
          projectId,
          after: list[list.length - 1].createdAt
        }
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return {
          ...prev,
          reports: {
            ...fetchMoreResult.reports
          }
        };
      }
    });

  render() {
    const { subscribe, loadMore } = this;
    const {
      match: {
        params: { id }
      }
    } = this.props;

    return (
      <Query query={GET_REPORTS} variables={{ input: { projectId: id } }}>
        {({ data, loading, fetchMore, subscribeToMore }) => {
          if (loading) return null;
          return (
            <Container>
              <Header>Recent reports</Header>
              <ReportList
                data={data}
                projectId={id}
                loadMore={loadMore(fetchMore, id, data.reports.rows)}
                subscribeToMore={subscribe(subscribeToMore, id)}
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

export default withRouter(ReportsContainer);

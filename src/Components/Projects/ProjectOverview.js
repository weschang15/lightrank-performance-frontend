import React from "react";
import { Query } from "react-apollo";
import { withRouter } from "react-router-dom";

import ProjectOverviewChart from "./ProjectOverviewChart";
import { GET_REPORT_SCORES } from "../../graphql";

const ProjectOverview = props => {
  const {
    match: {
      params: { id }
    }
  } = props;
  return (
    <Query query={GET_REPORT_SCORES} variables={{ input: { projectId: id } }}>
      {({ data, loading }) => {
        if (loading) return null;
        const {
          reports: { rows }
        } = data;
        return <ProjectOverviewChart data={rows} />;
      }}
    </Query>
  );
};

export default withRouter(ProjectOverview);

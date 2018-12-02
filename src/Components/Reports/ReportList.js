import React, { Component, Fragment } from "react";
import { Subscription } from "react-apollo";
import PropTypes from "prop-types";
import styled from "styled-components";
import ReportListItem from "./ReportListItem";
import { Table, TableHead, TableBody, TableRow, TableCell } from "Elements";
import { REPORT_UPDATED_SUBSCRIPTION } from "../../graphql";

class ReportList extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    subscribeToMore: PropTypes.func.isRequired
  };

  static defaultProps = {
    subscribeToMore: () => null
  };

  componentDidMount = () => {
    const { subscribeToMore } = this.props;
    subscribeToMore();
  };

  render() {
    const {
      data: { reports },
      projectId
    } = this.props;

    const reportItems = reports.map(report => (
      <Fragment key={report.uuid}>
        <ReportListItem report={report} />
        <Subscription
          subscription={REPORT_UPDATED_SUBSCRIPTION}
          variables={{ id: report.id, projectId }}
        >
          {() => null}
        </Subscription>
      </Fragment>
    ));

    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>URL</TableCell>
            <TableCell>Scores</TableCell>
            <TableCell>Last Updated</TableCell>
            <CenterCell>Status</CenterCell>
          </TableRow>
        </TableHead>
        <TableBody>{reportItems}</TableBody>
      </Table>
    );
  }
}

const CenterCell = styled(TableCell)`
  text-align: center;
`;

export default ReportList;

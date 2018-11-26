import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ReportListItem from "./ReportListItem";
import { Table, TableHead, TableBody, TableRow, TableCell } from "Elements";

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
    const { reports } = this.props.data;

    const reportItems = reports.map(report => (
      <ReportListItem key={report.uuid} report={report} />
    ));

    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>URL</TableCell>
            <TableCell>Scores</TableCell>
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

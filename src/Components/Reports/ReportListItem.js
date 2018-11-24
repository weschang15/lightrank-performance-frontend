import React from "react";
import styled from "styled-components";
import { Icon, Spinner, TableRow, TableCell } from "Elements";

const renderScores = ({
  performance,
  pwa,
  accessibility,
  bestPractices,
  seo
} = {}) => {};

const ReportListItem = ({ report }) => {
  return (
    <TableRow>
      <TableCell>{report.id}</TableCell>
      <TableCell>{report.url}</TableCell>
      <TableCell />
      <CenterCell>
        <span>
          {report.completed ? (
            <Icon name="checkmark" size="14px" color="#1abb9c" />
          ) : (
            <Spinner />
          )}
        </span>
      </CenterCell>
    </TableRow>
  );
};

const CenterCell = styled(TableCell)`
  text-align: center;
`;

export default ReportListItem;

import React from "react";
import { Spinner, TableRow, TableCell } from "Elements";

const ReportListItem = ({ report }) => {
  return (
    <TableRow>
      <TableCell>{report.id}</TableCell>
      <TableCell>{report.url}</TableCell>
      <TableCell />
      <TableCell>
        <Spinner />
      </TableCell>
    </TableRow>
  );
};

export default ReportListItem;

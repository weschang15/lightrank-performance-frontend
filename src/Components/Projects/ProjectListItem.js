import React from "react";
import { Link, withRouter } from "react-router-dom";
import { TableRow, TableCell } from "Elements";

const ProjectListItem = ({ project, match }) => {
  const url = `${match.url}/${project.id}`;
  return (
    <TableRow>
      <TableCell>{project.id}</TableCell>
      <TableCell>{project.name}</TableCell>
      <TableCell>74, 76, 82</TableCell>
      <TableCell className="invisible">
        <span>
          <Link to={url}>View</Link> | <span>Delete</span>
        </span>
      </TableCell>
    </TableRow>
  );
};

export default withRouter(ProjectListItem);

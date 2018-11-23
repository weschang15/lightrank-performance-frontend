import React from "react";
import { TableRow, TableCell } from "Elements";

const ProjectListItem = ({ project }) => {
  return (
    <TableRow>
      <TableCell>{project.id}</TableCell>
      <TableCell>{project.name}</TableCell>
      <TableCell>74, 76, 82</TableCell>
      <TableCell>
        <span>
          <span>View</span> <span>Delete</span>
        </span>
      </TableCell>
    </TableRow>
  );
};

export default ProjectListItem;

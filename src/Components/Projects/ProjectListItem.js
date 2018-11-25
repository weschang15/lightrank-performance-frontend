import React from "react";
import { Link, withRouter } from "react-router-dom";
import { TableRow, TableCell } from "Elements";
import Score from "../Scores/Score";
import ScoreWrapper from "../Scores/ScoreWrapper";

const scores = scores => {
  return scores.map(score => <Score key={score.name} score={score} />);
};

const ProjectListItem = ({ project, match }) => {
  const url = `${match.url}/${project.id}`;
  return (
    <TableRow>
      <TableCell>{project.id}</TableCell>
      <TableCell>{project.name}</TableCell>
      <TableCell>
        <ScoreWrapper>{scores(project.averages)}</ScoreWrapper>
      </TableCell>
      <TableCell className="invisible">
        <span>
          <Link to={url}>View</Link> | <span>Delete</span>
        </span>
      </TableCell>
    </TableRow>
  );
};

export default withRouter(ProjectListItem);

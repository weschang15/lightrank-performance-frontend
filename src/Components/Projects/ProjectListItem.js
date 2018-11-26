import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { TableRow, TableCell } from "Elements";
import { Toggle } from "Utilities";
import DeleteProject from "./DeleteProject";
import Score from "../Scores/Score";
import ScoreWrapper from "../Scores/ScoreWrapper";

const scores = (averages, uuid) => {
  return averages.map(score => (
    <Score key={`${uuid}${score.name}`} score={score} />
  ));
};

const ProjectListItem = ({ project, match }) => {
  const { id, uuid, name, averages } = project;
  const url = `${match.url}/${id}`;

  return (
    <TableRow>
      <TableCell>{id}</TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>
        <ScoreWrapper>{scores(averages, uuid)}</ScoreWrapper>
      </TableCell>
      <TableCell className="invisible">
        <span>
          <Link to={url}>View</Link> |{" "}
          <Toggle>
            {({ on, toggle }) => (
              <>
                {on && (
                  <DeleteProject on={on} toggle={toggle} project={project} />
                )}
                <span onClick={toggle}>Delete</span>
              </>
            )}
          </Toggle>
        </span>
      </TableCell>
    </TableRow>
  );
};

export default withRouter(ProjectListItem);

import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { CircleButton, Icon, TableRow, TableCell } from "Elements";
import { Toggle } from "Utilities";
import AddProjectMember from "./AddProjectMember";
import DeleteProject from "./DeleteProject";
import Score from "../Scores/Score";
import ScoreWrapper from "../Scores/ScoreWrapper";
import UserIcon from "../Users/UserIcon";

const projectAverages = (averages, uuid) => {
  return averages.map(score => (
    <Score key={`${uuid}${score.name}`} score={score} />
  ));
};

const projectMembers = users => {
  return users.map(user => <UserIcon key={user.email} {...user} />);
};

const ProjectListItem = ({ project, match }) => {
  const { id, uuid, name, averages, users } = project;
  const url = `${match.url}/${id}`;

  return (
    <TableRow>
      <TableCell>{id}</TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>
        <ScoreWrapper>{projectAverages(averages, uuid)}</ScoreWrapper>
      </TableCell>
      <TableCell>
        <UserIconsContainer>
          <Toggle>
            {({ on, toggle }) => (
              <>
                {on && (
                  <AddProjectMember on={on} toggle={toggle} project={project} />
                )}
                <CircleButton onClick={toggle}>
                  <Icon name="user-add" size="16px" color="#d2d2d4" />
                </CircleButton>
              </>
            )}
          </Toggle>
          {users && projectMembers(users)}
        </UserIconsContainer>
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

const UserIconsContainer = styled.span`
  display: inline-flex;
`;

export default withRouter(ProjectListItem);

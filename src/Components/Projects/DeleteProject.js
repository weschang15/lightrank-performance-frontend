import React from "react";
import { Mutation } from "react-apollo";
import styled from "styled-components";
import { Modal } from "Elements";
import DeleteProjectForm from "./DeleteProjectForm";
import { DELETE_PROJECT } from "../../graphql";

const DeleteProject = ({ on, toggle, project }) => {
  return (
    <Mutation mutation={DELETE_PROJECT}>
      {deleteProject => {
        return (
          <Modal on={on} toggle={toggle}>
            <Subtext>
              Are you sure you want to delete this project and all of it's data?
            </Subtext>
            <DeleteProjectForm
              onSubmit={deleteProject}
              onSuccess={toggle}
              name={project.name}
              projectId={project.id}
            />
          </Modal>
        );
      }}
    </Mutation>
  );
};

const Subtext = styled.p`
  color: #494950;
`;

export default DeleteProject;

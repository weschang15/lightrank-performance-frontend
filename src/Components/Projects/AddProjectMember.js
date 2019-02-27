import React from "react";
import { Mutation } from "react-apollo";
import styled from "styled-components";
import { Modal } from "Elements";
import AddProjectMemberForm from "./AddProjectMemberForm";
import { ADD_PROJECT_MEMBER } from "../../graphql";

const AddProjectMember = ({ on, toggle, project }) => {
  return (
    <Mutation mutation={ADD_PROJECT_MEMBER}>
      {addProjectMember => {
        return (
          <Modal on={on} toggle={toggle}>
            <Subtext>
              Enter the email address of the user you'd like to add to this
              project.
            </Subtext>
            <AddProjectMemberForm
              onSubmit={addProjectMember}
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

export default AddProjectMember;

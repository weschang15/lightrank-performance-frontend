import React from "react";
import { Mutation } from "react-apollo";
import NewProjectForm from "./NewProjectForm";
import { CREATE_PROJECT } from "../../graphql";

const NewProject = () => {
  return (
    <Mutation mutation={CREATE_PROJECT}>
      {createProject => {
        return <NewProjectForm onSubmit={createProject} />;
      }}
    </Mutation>
  );
};

export default NewProject;

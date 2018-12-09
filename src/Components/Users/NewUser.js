import React from "react";
import { Mutation } from "react-apollo";
import { CREATE_USER, UPDATE_AUTH } from "../../graphql";
import NewUserForm from "./NewUserForm";

const NewUser = () => {
  return (
    <Mutation mutation={CREATE_USER}>
      {(createUser, { client }) => {
        const onSuccess = ({ isAuth, userId }) =>
          client.mutate({
            mutation: UPDATE_AUTH,
            variables: { isAuth, userId }
          });

        return <NewUserForm onSubmit={createUser} onSuccess={onSuccess} />;
      }}
    </Mutation>
  );
};

export default NewUser;

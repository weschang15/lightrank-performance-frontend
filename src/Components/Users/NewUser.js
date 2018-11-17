import React from "react";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";
import { UPDATE_AUTH } from "../../graphql";
import NewUserForm from "./NewUserForm";

const NewUser = () => {
  return (
    <Mutation mutation={REGISTER_USER}>
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

const REGISTER_USER = gql`
  mutation CreateUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    createUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      ok
      user {
        id
      }
      errors {
        path
        message
      }
    }
  }
`;

export default NewUser;

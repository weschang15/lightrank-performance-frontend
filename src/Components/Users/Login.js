import React from "react";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";
import { UPDATE_AUTH } from "../../graphql";
import LoginUserForm from "./LoginUserForm";

const Login = () => {
  return (
    <Mutation mutation={LOGIN_USER}>
      {(loginUser, { client }) => {
        const onSuccess = ({ isAuth, userId }) =>
          client.mutate({
            mutation: UPDATE_AUTH,
            variables: { isAuth, userId }
          });

        return <LoginUserForm onSubmit={loginUser} onSuccess={onSuccess} />;
      }}
    </Mutation>
  );
};

const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
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

export default Login;

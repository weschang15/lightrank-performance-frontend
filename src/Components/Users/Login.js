import React from "react";
import { Mutation } from "react-apollo";
import { LOGIN_USER, UPDATE_AUTH } from "../../graphql";
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

export default Login;

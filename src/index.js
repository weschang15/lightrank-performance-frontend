import React from "react";
import { render } from "react-dom";
import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
const client = new ApolloClient({
  uri: "/graphql"
});

const currentUserQuery = gql`
  query {
    currentUser {
      ok
      errors {
        path
        message
      }
      user {
        email
      }
    }
  }
`;

client.query({ query: currentUserQuery }).then(result => console.log(result));

const logoutMutation = gql`
  mutation {
    logoutUser {
      ok
      errors {
        path
        message
      }
    }
  }
`;

const logout = e => {
  client
    .mutate({ mutation: logoutMutation })
    .then(result => console.log(result));
};

const app = (
  <ApolloProvider client={client}>
    <button onClick={logout}>Logout</button>
  </ApolloProvider>
);

render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

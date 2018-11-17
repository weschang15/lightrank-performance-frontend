import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Query } from "react-apollo";
import openSocket from "socket.io-client";
import { Routes } from "Components";
import { gql } from "apollo-boost";
import { UPDATE_AUTH } from "./graphql";

class App extends Component {
  componentDidMount = () => {
    const socket = openSocket("http://localhost:4000");

    socket.on("ReportUpdated", report => {
      console.log(report);
    });
  };

  render() {
    return (
      <BrowserRouter>
        <Query query={GET_CURRENT_USER}>
          {({ data: { currentUser }, loading, client, updateQuery }) => {
            const isAuth = !!currentUser;
            if (!loading && isAuth) {
              updateQuery(() => {
                client.mutate({
                  mutation: UPDATE_AUTH,
                  variables: { isAuth, userId: currentUser.id }
                });
              });
            }
            return <Routes isAuth={isAuth} isLoading={loading} />;
          }}
        </Query>
      </BrowserRouter>
    );
  }
}

const GET_CURRENT_USER = gql`
  query Me {
    currentUser {
      id
    }
  }
`;

export default App;

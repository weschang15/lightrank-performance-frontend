import React from "react";
import { render } from "react-dom";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { WebSocketLink } from "apollo-link-ws";
import { HttpLink } from "apollo-link-http";
import { split, from } from "apollo-link";
import { getMainDefinition } from "apollo-utilities";
import { InMemoryCache } from "apollo-boost";
import { withClientState } from "apollo-link-state";
import { defaults, resolvers, typeDefs } from "./graphql";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const cache = new InMemoryCache();

const wsLink = new WebSocketLink({
  uri: process.env.REACT_APP_GQLWS_ENDPOINT,
  options: {
    reconnect: true
  }
});

const httpLink = new HttpLink({
  uri: `${process.env.REACT_APP_API_ENDPOINT}/graphql`
});

const stateLink = withClientState({ cache, defaults, resolvers, typeDefs });

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === "OperationDefinition" && operation === "subscription";
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: from([stateLink, link]),
  cache
});

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

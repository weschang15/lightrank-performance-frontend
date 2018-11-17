import React, { Component } from "react";
import { NewUser, Login } from "Components";

export default class UserJoin extends Component {
  render() {
    return (
      <div>
        <NewUser />
        <Login />
      </div>
    );
  }
}

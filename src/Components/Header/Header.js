import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/users/join">Login or Join</Link>
    </div>
  );
};

export default Header;

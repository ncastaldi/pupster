import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/discover">Discover</Link>
      <Link to="/search">Search</Link>
    </>
  );
};

export default NavBar;

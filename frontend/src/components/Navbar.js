import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <Link to={`/`}>
          <h2>Navbar</h2>
        </Link>
      </div>
    </div>
  );
};

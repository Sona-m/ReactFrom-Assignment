import React from "react";
import { NavLink } from "react-router-dom";
import { MdWebhook } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="nav">
      <NavLink to="/info">Personal Info</NavLink>
      <NavLink to="/edu">Education</NavLink>
      <NavLink to="/exp">Experience</NavLink>
      <MdWebhook className="logo" />
    </div>
  );
};

export default Navbar;

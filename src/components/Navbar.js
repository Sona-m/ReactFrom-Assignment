import React from "react";
import { NavLink } from "react-router-dom";
import { MdWebhook } from "react-icons/md";
import { useSelector } from "react-redux";

const Navbar = () => {
  
  const { current } = useSelector((state) => state.navigation);
  console.log(current);

  const handleNavLinkClick = (e) => {
    if (e.target.getAttribute("disabled") === "true") {
      e.preventDefault();
    }
  };

  return (
    <div className="nav">
      <NavLink to="/info">Personal Info</NavLink>

      <NavLink
        to={current === "/edu" ? "/edu" : ""}
        className={current !== "/edu" ? "disabled" : ""}
        onClick={handleNavLinkClick}
        disabled={current !== "/edu"}
      >
        Education
      </NavLink>

      <NavLink
        to={current === "/exp" ? "/exp" : ""}
        className={current !== "/exp" ? "disabled" : ""}
        onClick={handleNavLinkClick}
        disabled={current !== "/exp"}
      >
        Experience
      </NavLink>

      <MdWebhook className="logo" />
    </div>
  );
};

export default Navbar;

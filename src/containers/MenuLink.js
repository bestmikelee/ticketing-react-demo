import React from "react";
import { NavLink } from "react-router-dom";

const MenuLink = ({ menuItem, children }) => (
  <NavLink
    to={menuItem === "SHOW_ACTIVE" ? "/" : `/${menuItem}`}
    activeStyle={{
      textDecoration: "none",
      color: "black"
    }}
  >
    {children}
  </NavLink>
);

export default MenuLink;

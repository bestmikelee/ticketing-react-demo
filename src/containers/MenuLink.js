import React from "react";
<<<<<<< HEAD
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
=======
import { Link } from "react-router-dom";
import { ADD_TICKET } from "../constants/ActionTypes";
import Button from "material-ui/Button";
const MenuLink = ({ menuItem, menuState, children }) => {
  if (menuState !== ADD_TICKET) {
    return (
      <Link to={`/${menuItem}`}>
        <Button variant="raised" color="primary">
          New Ticket
        </Button>
      </Link>
    );
  } else {
    return (
      <Link to={"/"}>
        <Button variant="raised" color="primary">
          Cancel
        </Button>
      </Link>
    );
  }
};
>>>>>>> bf19f7a5da6882a07aee40f45f74178eb19b8ab7

export default MenuLink;

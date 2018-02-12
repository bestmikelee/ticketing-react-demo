import React from "react";
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

export default MenuLink;

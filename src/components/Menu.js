import React, { Component } from "react";
import PropTypes from "prop-types";
import MenuLink from "./MenuLink";
import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";

import { ADD_TICKET } from "../constants/ActionTypes";

const styles = {
  root: {
    width: "100%"
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    color: "white"
  }
};

class Menu extends Component {
  static propTypes = {
    completedCount: PropTypes.number.isRequired,
    activeCount: PropTypes.number.isRequired,
    filter: PropTypes.string,
    classes: PropTypes.object,
    menuState: PropTypes.string
  };

  render() {
    return (
      <div className="menu">
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="title"
              color="inherit"
              className={this.props.classes.flex}
            >
              Ticket Dashboard
            </Typography>
            <MenuLink menuItem={ADD_TICKET} menuState={this.props.menuState} />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Menu);

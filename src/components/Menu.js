import React, { Component } from "react";
import PropTypes from "prop-types";
<<<<<<< HEAD
import classnames from "classnames";
import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE
} from "../constants/TicketFilters";

import { ADD_TICKET } from "../constants/ActionTypes";

const FILTER_TITLES = {
  [SHOW_ALL]: "All",
  [SHOW_ACTIVE]: "Active",
  [SHOW_COMPLETED]: "Completed"
};

export default class Menu extends Component {
  static propTypes = {
    completedCount: PropTypes.number.isRequired,
    activeCount: PropTypes.number.isRequired,
    filter: PropTypes.string.isRequired,
    onClearCompleted: PropTypes.func.isRequired,
    onShow: PropTypes.func.isRequired
  };

  renderTodoCount() {
    const { activeCount } = this.props;
    const itemWord = activeCount === 1 ? "item" : "items";

    return (
      <span className="todo-count">
        <strong>{activeCount || "No"}</strong> {itemWord} left
      </span>
    );
  }

  renderFilterLink(filter) {
    const title = FILTER_TITLES[filter];
    const { filter: selectedFilter, onShow } = this.props;

    return (
      <a
        className={classnames({ selected: filter === selectedFilter })}
        style={{ cursor: "pointer" }}
        onClick={() => onShow(filter)}
      >
        {title}
      </a>
    );
  }

  renderClearButton() {
    const { completedCount, onClearCompleted } = this.props;
    if (completedCount > 0) {
      return (
        <button className="clear-completed" onClick={onClearCompleted}>
          Clear completed
        </button>
      );
    }
  }

  render() {
    return (
      <div className="menu">
        {this.renderTodoCount()}
        <ul className="menuItems">
          {[ADD_TICKET, SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED].map(item => (
            <li key={item}>{this.renderItemLink(item)}</li>
          ))}
        </ul>
        {this.renderClearButton()}
=======
import MenuLink from "../containers/MenuLink";
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
>>>>>>> bf19f7a5da6882a07aee40f45f74178eb19b8ab7
      </div>
    );
  }
}
<<<<<<< HEAD
=======

export default withStyles(styles)(Menu);
>>>>>>> bf19f7a5da6882a07aee40f45f74178eb19b8ab7

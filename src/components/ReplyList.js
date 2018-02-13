import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { ListItem, ListItemText } from "material-ui/List";
import { withStyles } from "material-ui/styles";
import { Link } from "react-router-dom";

class Replies extends Component {
  static propTypes = {
    submitted: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired
  };
  render() {
    return (
      <ListItem>
        <ListItemText
          inset={true}
          primary={`${this.props.user} said at ${new Date(
            this.props.submitted
          ).toLocaleString()}`}
          secondary={this.props.body}
        />
      </ListItem>
    );
  }
}
export default Replies;

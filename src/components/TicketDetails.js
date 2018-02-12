import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

export default class TicketDetails extends Component {
  static propTypes = {
    ticket: PropTypes.object.isRequired,
    editTicket: PropTypes.func.isRequired,
    deleteTicket: PropTypes.func.isRequired,
    closeTicket: PropTypes.func.isRequired
  };

  state = {
    editing: false
  };

  handleDoubleClick = () => {
    this.setState({ editing: true });
  };

  render() {
    const { ticket, closeTicket, deleteTicket } = this.props;

    const element = (
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={ticket.closed}
          onChange={() => closeTicket(ticket.id)}
        />
        <label onDoubleClick={this.handleDoubleClick}>{ticket.subject}</label>
        <p onDoubleClick={this.handleDoubleClick}>{ticket.body}</p>
        <button className="destroy" onClick={() => deleteTicket(ticket.id)} />
      </div>
    );

    return (
      <li
        className={classnames({
          closed: ticket.closed,
          editing: this.state.editing
        })}
      >
        {element}
      </li>
    );
  }
}

import React, { Component } from "react";
import PropTypes from "prop-types";
import TicketDetails from "./TicketDetails";
import Footer from "./Footer";
import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE
} from "../constants/TicketFilters";

const TICKET_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_ACTIVE]: ticket => !ticket.closed,
  [SHOW_COMPLETED]: ticket => ticket.closed
};

export default class Main extends Component {
  static propTypes = {
    tickets: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };

  state = { filter: SHOW_ALL };

  handleClearCompleted = () => {
    this.props.actions.clearCompleted();
  };

  handleShow = filter => {
    this.setState({ filter });
  };

  renderToggleAll(completedCount) {
    const { tickets, actions } = this.props;
    if (tickets.length > 0) {
      return (
        <span>
          <input
            className="toggle-all"
            type="checkbox"
            checked={completedCount === tickets.length}
          />
          <label onClick={actions.completeAll} />
        </span>
      );
    }
  }

  renderFooter(completedCount) {
    const { tickets } = this.props;
    const { filter } = this.state;
    const activeCount = tickets.length - completedCount;

    if (tickets.length) {
      return (
        <Footer
          completedCount={completedCount}
          activeCount={activeCount}
          filter={filter}
          onClearCompleted={this.handleClearCompleted}
          onShow={this.handleShow}
        />
      );
    }
  }

  render() {
    const { tickets, actions } = this.props;
    const { filter } = this.state;

    const filteredTickets = tickets.filter(TICKET_FILTERS[filter]);
    const completedCount = tickets.reduce(
      (count, ticket) => (ticket.completed ? count + 1 : count),
      0
    );
    //        {this.renderFooter(completedCount)}
    //        {this.renderToggleAll(completedCount)}

    return (
      <section className="main">
        <ul className="ticket-list">
          {filteredTickets.map(ticket => (
            <TicketDetails key={ticket.id} ticket={ticket} {...actions} />
          ))}
        </ul>
      </section>
    );
  }
}

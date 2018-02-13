import React from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Menu from "../components/Menu";
import * as TicketActions from "../actions";

const NewTicket = ({ tickets, actions, currentTicket, match: { params } }) => {
  console.log("NewTicket props", params);
  return (
    <div>
      <Menu
        completedCount={tickets.filter(t => t.closed).length}
        activeCount={tickets.filter(t => !t.closed).length}
        menuState="new-ticket"
      />
    </div>
  );
};

NewTicket.propTypes = {
  tickets: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  tickets: state.tickets.tickets,
  currentTicket: state.tickets.currentTicket
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TicketActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTicket);

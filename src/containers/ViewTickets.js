import React from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import TicketList from "../components/TicketList";
import Menu from "../components/Menu";
import * as TicketActions from "../actions";

const ViewTickets = ({
  tickets,
  actions,
  currentTicket,
  match: { params }
}) => {
  console.log("ViewTickets props", params);
  return (
    <div>
      <Menu
        completedCount={tickets.filter(t => t.closed).length}
        activeCount={tickets.filter(t => !t.closed).length}
        menuState={params.menuAction}
      />
      <TicketList tickets={tickets} actions={actions} />
    </div>
  );
};

ViewTickets.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(ViewTickets);

import React from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Menu from "../components/Menu";
import * as TicketActions from "../actions";

const EditTicket = ({ tickets, actions, currentTicket, match: { params } }) => {
  console.log("EditTicket props", params);
  return (
    <div>
      <Menu
        completedCount={tickets.filter(t => t.closed).length}
        activeCount={tickets.filter(t => !t.closed).length}
        menuState={params.menuAction}
      />
    </div>
  );
};

EditTicket.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(EditTicket);

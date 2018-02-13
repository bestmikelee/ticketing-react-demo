import React from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Menu from "../components/Menu";
import TicketInput from "../components/TicketInput";
import ticketHelper from "../helpers/ticketHelper";
import * as TicketActions from "../actions";

const NewTicket = ({ tickets, actions, currentTicket, match: { params } }) => {
  console.log(actions);
  return (
    <div>
      <Menu
        completedCount={tickets.filter(t => t.closed).length}
        activeCount={tickets.filter(t => !t.closed).length}
        menuState="new-ticket"
      />
      <TicketInput
        onSave={actions.addTicket}
        nextId={ticketHelper.largestByObjKey(tickets, "id") + 1}
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

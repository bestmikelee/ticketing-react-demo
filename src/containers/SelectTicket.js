import React from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Menu from "../components/Menu";
import TicketDetails from "../components/TicketDetails";

import * as TicketActions from "../actions";

const EditTicket = ({ tickets, actions, currentTicket, match: { params } }) => {
  console.log("EditTicket props", params);
  return (
    <div>
      <Menu menuState={params.menuAction} />
      <TicketDetails
        editTicket={actions.editTicket}
        deleteTicket={actions.deleteTicket}
        closeTicket={actions.closeTicket}
        openTicket={actions.openTicket}
        replyTicket={actions.replyTicket}
        ticket={tickets.filter(t => t.id === Number(params.id))[0]}
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

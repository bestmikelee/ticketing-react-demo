import React from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Header from "../components/Header";
import Main from "../components/Main";
import * as TicketActions from "../actions";

const App = ({ tickets, actions, currentTicket }) => {
  console.log("app props", tickets);
  return (
    <div>
      <Header />
      <Main tickets={tickets} actions={actions} />
    </div>
  );
};

App.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(App);

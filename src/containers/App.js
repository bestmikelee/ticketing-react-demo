import React from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
<<<<<<< HEAD
import Header from "../components/Header";
import Main from "../components/Main";
import * as TicketActions from "../actions";

const App = ({ tickets, actions, currentTicket }) => {
  console.log("app props", tickets);
  return (
    <div>
      <Header />
=======
import Main from "../components/Main";
import Menu from "../components/Menu";
import * as TicketActions from "../actions";

const App = ({ tickets, actions, currentTicket, match: { params } }) => {
  console.log("app props", params);
  return (
    <div>
      <Menu
        completedCount={tickets.filter(t => t.closed).length}
        activeCount={tickets.filter(t => !t.closed).length}
        menuState={params.menuAction}
      />
>>>>>>> bf19f7a5da6882a07aee40f45f74178eb19b8ab7
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

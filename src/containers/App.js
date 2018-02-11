import React from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Header from "../components/Header";
import MainSection from "../components/MainSection";
import * as TicketActions from "../actions";

const App = ({ tickets, actions }) => (
  <div>
    <Header addTicket={actions.addTicket} />
    <MainSection tickets={tickets} actions={actions} />
  </div>
);

App.propTypes = {
  tickets: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  tickets: state.tickets
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TicketActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

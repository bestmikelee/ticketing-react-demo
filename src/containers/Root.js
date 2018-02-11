import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";

const Root = ({ store }) => {
  console.log("Root Store", store);
  return (
    <Provider store={store}>
      <Router>
        <Route path="/:menuItem?" component={App} />
      </Router>
    </Provider>
  );
};

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;

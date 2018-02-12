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
<<<<<<< HEAD
        <Route path="/:menuItem?" component={App} />
=======
        <div>
          <Route path="/:menuAction?" component={App} />
          <Route path="/:menuAction/id" component={App} />
        </div>
>>>>>>> bf19f7a5da6882a07aee40f45f74178eb19b8ab7
      </Router>
    </Provider>
  );
};

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;

import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import Root from "./containers/Root";
import rootReducer from "./reducers";
import { loadState, saveState } from "./helpers/localStorage";

const persistedState = loadState();
const store = createStore(
  rootReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  saveState(store.getState());
});

render(<Root store={store} />, document.getElementById("root"));

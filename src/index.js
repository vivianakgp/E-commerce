import React from "react";
import { createRoot } from "react-dom/client";
// redux
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import rootReducer from "./redux";
// redux thunk
import thunk from "redux-thunk";

import App from "./App";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./Components/App";
import { store, persistor } from "./store";

ReactDOM.render(
  <Provider store={store}>
    {/* <PersistGate persistor={persistor}> */}
      <App />
    {/* </PersistGate> */}
  </Provider>,
  document.getElementById("app")
);

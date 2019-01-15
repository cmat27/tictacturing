import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { Router, browserHistory } from "react-router";
import Routes from "./routes";

ReactDOM.render(
  <Router history={browserHistory} routers={Routes} />,
  document.getElementById("root")
);

serviceWorker.unregister();

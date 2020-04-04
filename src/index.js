import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux"; //目的是为了把store和项目进行绑定；
import store from "./store/store";
import { BrowserRouter } from "react-router-dom";
import "./static/css/base.css"

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

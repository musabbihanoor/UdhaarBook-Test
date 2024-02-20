import React from "react";
import { BrowserRouter } from "react-router-dom";

import { AppRouter } from "./router";

import "./App.css";

import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {/* contains all the routes */}
        <AppRouter />
      </BrowserRouter>
    </Provider>
  );
};

export default App;

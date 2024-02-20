import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router";

import { Provider } from "react-redux";
import store from "./store";

import "./App.css";

const App = () => {
  return (
    // Redux store
    <Provider store={store}>
      {/* Router implementation */}
      <BrowserRouter>
        {/* contains all the routes */}
        <AppRouter />
      </BrowserRouter>
    </Provider>
  );
};

export default App;

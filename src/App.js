import React from "react";
import { BrowserRouter } from "react-router-dom";

import { AppRouter } from "./router";
import { Layout } from "./components/layout";

import "./App.css";

import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {/* the layout contains sidebar and navbar */}
        <Layout>
          {/* contains all the routes */}
          <AppRouter />
        </Layout>
      </BrowserRouter>
    </Provider>
  );
};

export default App;

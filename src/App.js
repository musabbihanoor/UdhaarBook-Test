import React from "react";
import { BrowserRouter } from "react-router-dom";

import { AppRouter } from "./router";
import { Layout } from "./components";

import Loading from "./components/Loading";

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

          {/* setup your condition for loading, you can also use this component in other pages */}
          <Loading isLoading={false} />
        </Layout>
      </BrowserRouter>
    </Provider>
  );
};

export default App;

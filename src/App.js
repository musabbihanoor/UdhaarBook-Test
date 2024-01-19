import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import { AppRouter } from "./router";
import { ToastContainer } from "react-toastify";
import { Layout } from "./components";

import Loading from "./components/Loading";

import "./App.css";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const authorize = () => setIsAuthenticated(true);

  return (
    <BrowserRouter>
      {/* the layout contains sidebar and navbar */}
      <Layout isAuthenticated={isAuthenticated}>
        {/* contains all the routes */}
        <AppRouter authorize={authorize} />

        {/* setup your condition for loading, you can also use this component in other pages */}
        <Loading isLoading={false} />

        {/* initialized toast message component here, check the doc for implementation */}
        <ToastContainer
          pauseOnFocusLoss={false}
          autoClose={1500}
          theme="light"
          closeOnClick
        />
      </Layout>
    </BrowserRouter>
  );
};

export default App;

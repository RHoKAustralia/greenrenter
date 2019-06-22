import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all";
import Navbar from './Navbar';
import LandingPage from "./LandingPage";
import FormPage from "./FormPage.jsx";
import SummaryPage from "./SummaryPage";

import { Route, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Route path="/" exact component={LandingPage} />
      <Route path="/forms" exact component={FormPage} />
      <Route path="/summary" exact component={SummaryPage} />
    </BrowserRouter>
  );
};

export default App;

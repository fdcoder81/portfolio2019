import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.scss";
import Header from "./Header";
import Main from "./Main";
import Portfolio from "./Portfolio";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={Main} />
        <Route path="/portfolio" component={Portfolio} />
      </BrowserRouter>
    </div>
  );
}

export default App;

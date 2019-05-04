import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.scss";
import Header from "./Header";
import Main from "./Main";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import ToggleMenu from "./ToggleMenu";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <ToggleMenu />
        <Route path="/" exact component={Main} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
      </BrowserRouter>
    </div>
  );
}

export default App;

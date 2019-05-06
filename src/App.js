import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.scss";
import Header from "./Header";
import Main from "./Main";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

function App() {
  return (
    <div className="container">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header />
        <Route path="/" exact component={Main} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
      </BrowserRouter>
    </div>
  );
}

export default App;

import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Home } from "./pages/Home";
// import { About } from "./pages/About";
// import { Contact } from "./pages/Contact";
// import { NoMatch } from "./pages/NoMatch";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Content from "./components/Content";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Hero />
          <Content />
          {/* <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={NoMatch} />
          </Switch> */}
        </Router>
      </>
    );
  }
}

export default App;

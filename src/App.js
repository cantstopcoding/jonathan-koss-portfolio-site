import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import About from "./pages/About";
// import { Contact } from "./pages/Contact";
// import { NoMatch } from "./pages/NoMatch";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
          </Switch>

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

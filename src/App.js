import React, { Fragment } from "react";
import { Container } from "reactstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./css/App.css";

import NavigationBar from "./components/NavigationBar";

import Home from "./pages/Home";
import Campuses from "./pages/Campuses";
import Students from "./pages/Students";
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment>
      <Router>
        <NavigationBar />
        <div className="App">
          <Container>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/campuses" component={Campuses} />
              <Route path="/students" component={Students} />
            </Switch>
          </Container>
        </div>
        <Footer />
      </Router>
    </Fragment>
  );
}

export default App;

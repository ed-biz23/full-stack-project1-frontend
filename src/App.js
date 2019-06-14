import React, { Fragment } from "react";
import { Container } from "reactstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./css/App.css";

import NavigationBar from "./components/NavigationBar";

import Home from "./pages/Home";
import Campuses from "./pages/Campuses";
import Students from "./pages/Students";
import EditCampus from "./pages/EditCampus";

function App() {
  return (
    <Fragment>
      <Router>
        <NavigationBar />
        <div className="App">
          <Container>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/campuses" component={Campuses} />
              <Route path="/students" component={Students} />
              <Route path="/campuses/edit-campus" component={EditCampus} />
            </Switch>
          </Container>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;

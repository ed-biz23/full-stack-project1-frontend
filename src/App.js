import React, { Fragment, useContext, useEffect } from "react";
import { Container } from "reactstrap";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import "./css/App.css";

import NavigationBar from "./components/NavigationBar";

import Home from "./pages/Home";
import Campuses from "./pages/Campuses";
import Students from "./pages/Students";
import EditCampus from "./pages/EditCampus";
import ShowCampus from "./pages/ShowCampus";

import { Store } from "./Store";

function App() {
  const { state, dispatch } = useContext(Store);

  const fetchCampusesDataAction = async () => {
    const data = await fetch(
      "https://secret-waters-79188.herokuapp.com/api/campuses"
    );
    const dataJSON = await data.json();
    return dispatch({
      type: "FETCH_CAMPUSES_DATA",
      payload: dataJSON
    });
  };

  const fetchStudentsDataAction = async () => {
    const data = await fetch(
      "https://secret-waters-79188.herokuapp.com/api/students"
    );
    const dataJSON = await data.json();
    return dispatch({
      type: "FETCH_STUDENTS_DATA",
      payload: dataJSON
    });
  };

  useEffect(() => {
    state.campusesData.length === 0 && fetchCampusesDataAction();
    state.studentsData.length === 0 && fetchStudentsDataAction();
  }, []);

  return (
    <Fragment>
      <Router basename={process.env.PUBLIC_URL}>
        <NavigationBar />
        <div className="App">
          <Container>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/campuses" component={Campuses} />
              <Route path="/students" component={Students} />
              {state.campusesData.length !== 0 ? (
                <Fragment>
                  <Route path="/campuses/edit-campus" component={EditCampus} />
                  <Route path="/campuses/show-campus" component={ShowCampus} />
                </Fragment>
              ) : (
                <Redirect to="/campuses" />
              )}
            </Switch>
          </Container>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;

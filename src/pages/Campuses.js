import React, { Fragment, useContext } from "react";
import { Row, Col } from "reactstrap";

import { Store } from "../Store";

import CampusCardView from "../views/CampusCardView";
import AddCampus from "../components/AddCampus";

const Campuses = () => {
  const { state, dispatch } = useContext(Store);

  const emptyDataLayout = () => {
    return (
      <Fragment>
        <h1>All Campuses</h1>
        <p style={{ color: "grey" }}>
          There are no campuses registered in the database
        </p>
        <AddCampus dispatch={dispatch} />
      </Fragment>
    );
  };

  const dataLayout = () => {
    return (
      <Row>
        <Col xs="6" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          All Campuses
        </Col>
        <Col xs="6">
          <AddCampus dispatch={dispatch} />
        </Col>
        {state.campusesData.map(campus => (
          <CampusCardView key={campus.id} campus={campus} />
        ))}
      </Row>
    );
  };

  return (
    <div style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
      {state.campusesData.length === 0 ? emptyDataLayout() : dataLayout()}
    </div>
  );
};

export default Campuses;

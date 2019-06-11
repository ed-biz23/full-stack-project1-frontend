import React, { useState } from "react";
import { Row, Col } from "reactstrap";

import AddCampus from "../components/AddCampus";

const Campuses = () => {
  const [data, setData] = useState([]);

  const handleAddCampusBtn = value => {
    setData([...data, value]);
  };

  const emptyDataLayout = () => {
    return (
      <React.Fragment>
        <h1>All Campuses</h1>
        <p>There are no campuses registered in the database</p>
        <AddCampus handleAddCampusBtn={handleAddCampusBtn} />
      </React.Fragment>
    );
  };

  const dataLayout = () => {
    return (
      <Row>
        <Col xs="6" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          All Campuses
        </Col>
        <Col xs="6">
          <AddCampus handleAddCampusBtn={handleAddCampusBtn} />
        </Col>
        {data.map(name => (
          <h1>{name}</h1>
        ))}
      </Row>
    );
  };

  return (
    <div style={{ paddingTop: "5rem" }}>
      {data.length === 0 ? emptyDataLayout() : dataLayout()}
    </div>
  );
};

export default Campuses;

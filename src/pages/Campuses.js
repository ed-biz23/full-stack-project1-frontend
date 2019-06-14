import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import { v4 } from "uuid";

import CampusCardView from "../views/CampusCardView";
import AddCampus from "../components/AddCampus";

const Campuses = () => {
  const [data, setData] = useState([]);

  const handleAddCampusBtn = name => {
    setData([
      ...data,
      {
        id: v4(),
        name: name,
        location: null,
        imageUrl: null,
        description: null,
        students: []
      }
    ]);
  };

  const handleDeleteBtn = index => {
    data.splice(index, 1);
    setData([...data]);
  };

  const handleEditBtn = (index, editData) => {
    data.splice(index, 1);
    setData([...data]);
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
        {data.map((data, index) => (
          <CampusCardView
            key={data.id}
            campus={data}
            index={index}
            deleteBtn={handleDeleteBtn}
            editBtn={handleEditBtn}
          />
        ))}
      </Row>
    );
  };

  return (
    <div style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
      {data.length === 0 ? emptyDataLayout() : dataLayout()}
    </div>
  );
};

export default Campuses;

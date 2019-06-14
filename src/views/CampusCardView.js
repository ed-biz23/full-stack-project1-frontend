import React from "react";
import { Link } from "react-router-dom";
import { Col, Card, CardImg, CardBody, CardTitle, Button } from "reactstrap";
import image from "../assets/campus-placeholder.svg";

const CampusCardView = ({ campus, index, deleteBtn }) => {
  return (
    <Col sm="3">
      <Card
        style={{
          background: "white",
          color: "grey",
          marginTop: "0.75rem"
        }}
      >
        <CardImg top width="100%" src={image} alt="placeholder" />
        <CardBody>
          <CardTitle>{campus.name.toUpperCase()}</CardTitle>
          <CardBody>{campus.students.length} Students</CardBody>
          <Link to="/campuses/edit-campus">
            <Button color="primary" size="xs">
              Edit
            </Button>
          </Link>
          {"                    "}
          <Button
            color="danger"
            size="xs"
            onClick={() => {
              deleteBtn(index);
            }}
          >
            Delete
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CampusCardView;

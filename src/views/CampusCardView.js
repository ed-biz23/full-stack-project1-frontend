import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Col, Card, CardImg, CardBody, CardText, Button } from "reactstrap";

import { Store } from "../Store";

const CampusCardView = ({ campus }) => {
  const { dispatch } = useContext(Store);

  const fetchCampusesDataAction = async () => {
    const data = await fetch("/api/campuses");
    const dataJSON = await data.json();
    return dispatch({
      type: "FETCH_CAMPUSES_DATA",
      payload: dataJSON
    });
  };

  const fetchDeleteCampus = async id => {
    await fetch("/api/campuses/" + id, {
      method: "DELETE"
    });
    setTimeout(() => {
      fetchCampusesDataAction();
    }, 500);
  };

  return (
    <Col sm="3">
      <Card
        style={{
          background: "white",
          color: "grey",
          marginTop: "0.75rem",
          minHeight: "24rem"
        }}
      >
        <CardImg top width="100%" src={campus.imageUrl} alt="placeholder" />
        <CardBody>
          <Link
            to={{
              pathname: "/campuses/show-campus",
              state: { id: campus.id }
            }}
          >
            <CardText
              style={{
                color: "grey",
                textDecoration: "underline"
              }}
            >
              {campus.name.toUpperCase()}
            </CardText>
          </Link>
          <CardText>
            {campus.students === undefined ? 0 : campus.students.length}{" "}
            Students
          </CardText>
          <Link
            to={{
              pathname: "/campuses/edit-campus",
              state: { campus: campus }
            }}
          >
            <Button color="primary" size="xs">
              Edit
            </Button>
          </Link>
          {"                    "}
          <Button
            color="danger"
            size="xs"
            onClick={() => {
              fetchDeleteCampus(campus.id);
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

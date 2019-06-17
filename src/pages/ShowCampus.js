import React, { Fragment, useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button } from "reactstrap";

import { Store } from "../Store";

const ShowCampus = props => {
  const { dispatch } = useContext(Store);
  const { id } = props.location.state;
  const [campus, setCampus] = useState("");

  const fetchCampusId = async () => {
    const data = await fetch(
      "https://secret-waters-79188.herokuapp.com/api/campuses/" + id
    );
    const dataJSON = await data.json();
    setCampus(dataJSON);
  };

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

  const fetchDeleteCampus = async id => {
    await fetch(
      "https://secret-waters-79188.herokuapp.com/api/campuses/" + id,
      {
        method: "DELETE"
      }
    );
    setTimeout(() => {
      fetchCampusesDataAction();
    }, 500);
  };

  useEffect(() => {
    fetchCampusId();
  }, []);

  const noStudentsLayout = () => {
    return (
      <Fragment>
        <div style={{ color: "grey", paddingTop: "1rem" }}>
          <h1 style={{ textAlign: "left" }}>Students on Campus</h1>
          <p style={{ color: "grey" }}>
            There are no students currently registered to this campus
          </p>
          <Button outline color="primary">
            Add Students
          </Button>
        </div>
      </Fragment>
    );
  };

  return (
    <div style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <img
            src={campus.imageUrl}
            alt={campus.name}
            style={{ height: "100%", width: "100%" }}
          />
        </Col>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <h1>{campus.name}</h1>
          <p>{campus.description}</p>
        </Col>
        <Col xs="6" style={{ paddingTop: "1rem" }}>
          <p style={{ color: "black" }}>Location: {campus.address}</p>
        </Col>
        <Col xs="6" style={{ paddingTop: "1rem" }}>
          <Link
            to={{
              pathname: `${process.env.PUBLIC_URL}/edit-campus`,
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
        </Col>
      </Row>
      {noStudentsLayout()}
    </div>
  );
};

export default ShowCampus;

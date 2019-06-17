import React, { useState, useContext } from "react";
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";

import { Store } from "../Store";

const EditCampus = props => {
  const { dispatch } = useContext(Store);
  const { campus } = props.location.state;
  const [name, setName] = useState(campus.name);
  const [address, setAddress] = useState(campus.address);
  const [imageUrl, setImageUrl] = useState(campus.imageUrl);
  const [description, setDescription] = useState(campus.description);

  const fetchCampusesDataAction = async () => {
    const data = await fetch("/api/campuses");
    const dataJSON = await data.json();
    return dispatch({
      type: "FETCH_CAMPUSES_DATA",
      payload: dataJSON
    });
  };

  return (
    <Form
      style={{
        paddingTop: "5rem",
        paddingBottom: "5rem",
        fontWeight: "bold",
        color: "grey"
      }}
    >
      <FormGroup row>
        <Label for="campusName" sm={2}>
          Campus Name
        </Label>
        <Col sm={10}>
          <Input
            type="text"
            name="campusName"
            id="campusName"
            placeholder="campus name"
            value={name !== null ? name : ""}
            onChange={e => {
              setName(e.target.value);
            }}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="campusLocation" sm={2}>
          Campus Location
        </Label>
        <Col sm={10}>
          <Input
            type="text"
            name="campusLocation"
            id="campusLocation"
            placeholder="campus location"
            value={address !== null ? address : ""}
            onChange={e => {
              setAddress(e.target.value);
            }}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="campusImageUrl" sm={2}>
          Campus Image URL
        </Label>
        <Col sm={10}>
          <Input
            type="text"
            name="campusImageUrl"
            id="campusImageUrl"
            placeholder="campus image url"
            value={imageUrl !== null ? imageUrl : ""}
            onChange={e => {
              setImageUrl(e.target.value);
            }}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="campusDescription" sm={2}>
          Campus Description
        </Label>
        <Col sm={10}>
          <Input
            type="textarea"
            name="campusDescription"
            id="campusDescription"
            value={description !== null ? description : ""}
            onChange={e => {
              setDescription(e.target.value);
            }}
          />
        </Col>
      </FormGroup>
      <FormGroup check row>
        <Col xs="auto">
          <Button
            color="primary"
            onClick={e => {
              e.preventDefault();
              const fetchUpdateCampus = async () => {
                await fetch("/api/campuses/" + campus.id, {
                  method: "PUT",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify({
                    name,
                    imageUrl,
                    address,
                    description
                  })
                });
              };
              fetchUpdateCampus();
              setTimeout(() => {
                fetchCampusesDataAction();
                props.history.push("/campuses");
              }, 500);
            }}
          >
            Save Changes
          </Button>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col>
          <h1>Students on Campus</h1>
        </Col>
      </FormGroup>
      <FormGroup row style={{ justifyContent: "center" }}>
        <Col xs="6" sm="4" offset="1">
          <Input
            type="select"
            name="selectStudent"
            id="selectStudent"
            bsSize="default"
          >
            <option>select student...</option>
          </Input>
        </Col>
        <Col xs="auto">
          <Button outline color="primary">
            Add to Campus
          </Button>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col>There are no students currently registered to this campus.</Col>
      </FormGroup>
    </Form>
  );
};

export default EditCampus;

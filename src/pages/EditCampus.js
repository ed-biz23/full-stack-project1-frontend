import React from "react";
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";

const EditCampus = () => {
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
          />
        </Col>
      </FormGroup>
      <FormGroup check row>
        <Col xs="auto">
          <Button color="primary">Save Changes</Button>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col>
          <h1>Students on Campus</h1>
        </Col>
      </FormGroup>
      <FormGroup row style={{ justifyContent: "center" }}>
        {/* <Label for="selectStudent" sm={2}>
          Select student...
        </Label> */}
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
          <Button color="primary">Add to Campus</Button>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col>There are no students currently registered to this campus.</Col>
      </FormGroup>
    </Form>
  );
};

export default EditCampus;

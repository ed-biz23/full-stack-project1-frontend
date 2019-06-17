import React from "react";
import { Button, Modal, ModalBody, ModalFooter, Input } from "reactstrap";

class AddCampus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }

  fetchPostNewCampusAction = async name => {
    const data = await fetch("/api/campuses", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name.toUpperCase()
      })
    });
    const dataJSON = await data.json();
    return this.props.dispatch({
      type: "ADD_CAMPUS_DATA",
      payload: dataJSON
    });
  };

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <Button outline color="primary" onClick={this.toggle}>
          Add Campus
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
          style={{ textAlign: "center" }}
        >
          <ModalBody>
            <h1>Campus Name</h1>
            <Input id="add-campus" />
          </ModalBody>
          <ModalFooter style={{ justifyContent: "center" }}>
            <Button
              color="primary"
              onClick={() => {
                this.toggle();
                if (document.getElementById("add-campus").value !== "") {
                  this.fetchPostNewCampusAction(
                    document.getElementById("add-campus").value
                  );
                }
              }}
            >
              Add Campus
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AddCampus;

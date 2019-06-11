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
                this.props.handleAddCampusBtn(
                  document.getElementById("add-campus").value
                );
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

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';

class AddStudent extends React.Component {
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
            Add Student
        </Button>
        <Modal  isOpen={this.state.modal}
                toggle={this.toggle}
                className={this.props.className}>
            <ModalBody>
             <h1>Student Info</h1>
             <Input id="student-name" placeholder="student name" />
             {/* <Input id="student-id" placeholder="student id" /> */}
            </ModalBody>
            <ModalFooter>
                <Button color="primary"
                        onClick={() => {
                            this.toggle();
                            this.props.handleStudentName(
                                document.getElementById("student-name").value
                            );
                            // this.props.handleStudentId(
                            //     document.getElementById("student-id").value
                            // );
                        }}>
                    Add Student
                </Button>{' '}
                <Button color="secondary"
                        onClick={this.toggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AddStudent;
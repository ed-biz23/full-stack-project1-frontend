import React, { useState, useEffect } from "react";

import {Container, Row, Col } from "reactstrap";

import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

import AddStudent from '../components/AddStudent';
const Students = () => {
  const [students, setStudents] = useState([
    // {
    //   name: 'Ba'
    //   // ID : '111111'
    // },
    // {
    //   name: 'Edward'
    //   // ID : '222222'
    // },
    // {
    //   name: 'Jhony'
    //   // ID : '333333'
    // }
  ]);
  // const [studentId, setStudentId] = useState('');

  const handleStudentName = name => {
    const newName = [...students, {name}];
    setStudents(newName);
  };
  // const handleStudentId = id => {
  //   setStudentId(id);
  // }

  const emptyStudentDataLayout = () => {
    return (
      <React.Fragment>
        <h1>All Students</h1>
        <p>There are no students registered in the database</p>  
        <AddStudent
        handleStudentName={handleStudentName}
        // handleStudentId={handleStudentId}
        />
      </React.Fragment>
    );
  };

  const studentDataLayout = () => {
    return (
      <Container>
        <Row>
          <Col xs="6" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            All Student
          </Col>
          <Col xs="6">
            <AddStudent
            handleStudentName={handleStudentName}
            // handleStudentId={handleStudentId}
            />
          </Col>
          {/* {students.map(name => (
          <h1>{name.name}</h1>
        ))} */}
          
        </Row>
          
          <Row>
          {students.map( (name) => {
            return(
               <div>
               <Card
               style={{color: "grey", margin: "0.2rem 0.2rem"}}>
                 <CardImg top width="100%" src="https://apprecs.org/ios/images/app-icons/256/b0/1156908976.jpg" alt={students.name} />
                 <CardBody>
                   <CardTitle>Name: {name.name}</CardTitle>
                   <CardSubtitle>ID: Student Empl ID</CardSubtitle>                   
                   <CardText>Campus: Campus Name.</CardText>
                 </CardBody>
               </Card>
               </div>
              )          
            })} 
          </Row>  
       </Container>
      
    );
  };


  return (
    <div style={{ paddingTop: "5rem" }}>
      {!students || students.length === 0 ? emptyStudentDataLayout() : studentDataLayout()}
    </div>
  );
  
};

export default Students;

import React from "react";
import { Row, Col, Button, } from 'react-bootstrap';

function EmployeeCard({image, firstName, lastName, age, phone, email, }) {
  return (
    <div>
      
    <Row className=""> 
      <Col>
      <img
      src={image}/>
      </Col>
      <Col><p>{lastName}, {firstName}</p></Col>
      <Col><p>{age}</p></Col>
      <Col><p>{phone}</p></Col>
      <Col><p>{email}</p></Col>
    </Row>
    </div>
  );
}

export default EmployeeCard;

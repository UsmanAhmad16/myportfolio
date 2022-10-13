import React, { useState } from 'react';
import Part from "./Part";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  return (
    <>
     <Container>
      
      <Row>
        <Col lg={11} sm={11} md={11}></Col>
        
        <Col sm={1} md={1} lg={1}><br /><Button  variant="primary" onClick={handleShow}>
        UET
      </Button>

      <Offcanvas show={show} onHide={handleClose} backdrop="static">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>About UET</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Part/>
        </Offcanvas.Body>
      </Offcanvas></Col>
      
      </Row>
    </Container>
      
    </>
  );
}


export default App;

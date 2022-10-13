
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function BasicExample() {
  return (
    <>
    
    {/* Stack the columns on mobile by making one full-width and the other half-width */}
    <div className='nav'>
    <div className='row'>
    
      <Col className='nam12'  lg={1} md={3} sm={3} xs={2}></Col>
      
      <Col className='nam12'  lg={5}md={9}sm={9} xs={9}>
      <Navbar  variant="light"  expand="lg"  fluid id="home">
      <Navbar.Brand  className="nam" ><br /><b style={{fontSize:"53px", fontFamily:"Square Peg"}}> Usman Ahmad</b></Navbar.Brand>
      </Navbar>
      </Col>
      
      <Col  lg={6} md={9} sm={9} sx={9}>
        <Navbar  variant="light">
      <Nav className="me-auto in" id='inn' >
            <Nav.Link href="#ab" ><div  className="btn1 btn-2 hover-slide-down"><span className='span1'>About Me</span></div></Nav.Link>
            <Nav.Link href="#myskill"><div className="btn1 btn-2 hover-slide-down"> <span>My Skills</span></div></Nav.Link>
            <Nav.Link href="#mypro"  ><div className="btn1 btn-2 hover-slide-down"><span>My Projects</span></div></Nav.Link>
            <Nav.Link href="#team" ><div className="btn1 btn-2 hover-slide-down tn"><span>My Team</span></div></Nav.Link>
            <Nav.Link href="#contect" ><div className="btn1 btn-2 hover-slide-down tn"><span>Contact Me</span></div></Nav.Link>
            
          </Nav>
          </Navbar>
      </Col>
      
    </div>

  

    </div>
  </>
);
}

export default BasicExample;

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

function ImgOverlayExample() {
  return (
    <>
    <Container fluid className="pk" style={{backgroundImage: `url("pic1 (3).jpg")` }}>
      <Row>
        <Col className="im1" style={{fontSize:"42px"}}><center><br /><br /><b><i>
        
          " To Be a Programmer ,it requires Patience and Practice "</i></b><br /><br/></center></Col>
      </Row>
      <Row>
        <Col className="im" >
          <br/>
              I m Usman Ahmad,a Programmer and Developer.More specifically I m working in top existing programming languages,you can find my specialities in skills section in more detail.
              I m a Computer Science Engineer and have an year of experince in my field.
         
        </Col>
        <Row>
          <Col style={{marginBottom:"4em",marginTop:"3em"}}>
          
          <center><Button className='btno btn-3 hover-border-1' href="#ab" variant="transparent"><span>Discover more!</span></Button></center>
          </Col>
        </Row>
      </Row>
    </Container>
    
    
    </>
  );
}

export default ImgOverlayExample;
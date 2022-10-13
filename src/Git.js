import Container from 'react-bootstrap/Container';
import Figure from 'react-bootstrap/Figure';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function AutoLayoutExample() {
  return (
    <><br/><br/><br/><br/><br/><div style={{padding:"1em"}}><center><b className="gg" id="mypro">Let's have A Github Journey</b></center><br/>
    <Container fluid className="nmm" >
      <Row >
        <Col lg={5}md={5}sm={12}>
      <Figure >
      <Figure.Image style={{height:"399px" ,width:"500px",padding:"2em"}}
        width={171}
        height={180}
        alt="171x180"
        src="pp1 (1).jpg" />
         </Figure>
      </Col>
        <Col lg={7}md={7}sm={12}><p className="az"><span style={{color:"red"}}>Github is Repository where  developers and  programmers usually keep their projects Let's have a look at mine.</span><br/><br/>

        Lorem ipsum dolor sit amet consectetur adipisicing elit.Impedit ex dolor illum distinctio optio ad odit. Veniam suscipit voluptas corrupti recusandae explicabo quod, temporibus consectetur cum, eius ex, non architecto.<br/><br/>

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ex dolor illum distinctio optio ad odit. Veniam suscipit voluptas corrupti recusandae explicabo quod, temporibus consectetur cum, eius ex, non architecto.</p>
        
        <Button style={{backgroundColor:"black"}} variant="dark" onClick={() => window.open("https://github.com/UsmanAhmad16", '_blank')} >Lest's Start</Button> 
       
       </Col>
      </Row> 
      </Container>
      </div>
      </>
  );
}

export default AutoLayoutExample;
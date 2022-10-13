import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Topslide from "./Topslide";

function KitchenSinkExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="images.jpeg" />
      <Card.Body>
        <Card.Title>UET Taxila</Card.Title>
        <Card.Text>
          University of Engenering and Teachnology Taxila,Punjab,Pakistan
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item><Card.Link href="http://web.uettaxila.edu.pk/">Home</Card.Link></ListGroup.Item>
        <ListGroup.Item><Card.Link href="https://admissions.uettaxila.edu.pk/">Admissions  2022</Card.Link></ListGroup.Item>
        <ListGroup.Item><Card.Link href="http://web.uettaxila.edu.pk/Sports.aspx#">Life at UET</Card.Link></ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <center>
        <Card.Link href="https://erp.uettaxila.edu.pk/login"><Button variant="danger">ERP</Button></Card.Link>
        
          <br/>
          <br/>
          <Topslide />
        </center>
      </Card.Body>
    </Card>
  );
}

export default KitchenSinkExample;
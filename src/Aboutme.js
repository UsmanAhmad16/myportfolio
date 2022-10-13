import Figure from 'react-bootstrap/Figure';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

function FigureExample() {
  
  return (<>

  
  <div >
    <div className="q" ><br /> <br /><br /><br /><br /><br /><center><b className="gg2" id="ab">About Me</b></center>
    
    <Container className="nm"  >
      <Row>
        <Col lg={1} md={3} sm={2} xs={1}></Col>
        <Col style={{alignContent:"center"}} lg={4}  md={9} sm={10} xs={11}><Figure>
      <Figure.Image className='ap'  
       
        
        alt="171x180"
        src="mine.jpg"/>

        </Figure>
      
      </Col>
      
      <Col  lg={1} ><hr className="vertical"/></Col>
      
      
        <Col lg={6} md={12}sm={12} xs={12}><p className="txt">
      I am <span className="redd"> Usman Ahmad </span> , a competent web developer and programmer. I have experience of more than
3 years of serving my clients. Through my proficiency in the front and back, I comprehend how
to create confronting and responsive websites.

I worked to accomplish my aim of deducing my client's intentions by fiddling with <span className="blu">Python,
JavaScript, and CPP</span>. I adore encountering challenges and practicing new aspects founded
on user response. For me, coding is not exhausting or tiring. It's my enthusiasm to compose
codes, experiment and execute them.

Besides technical capabilities, you will also find exceptional writing and communication skills in my bag.
Experience of working with my team and command of my aptitudes make me all in one package. I am
available with my team for your website or small business. Also, You can discuss your thoughts to get
suggestions for your desired user interface.</p>
      
    
    </Col>
      </Row>
      </Container>
    </div>
    </div> 
    </>
  );
}

export default FigureExample;
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';



function AutoLayoutExample() {
    const now = 68;
  return (<>

   




    <br/><br/><br/><br/><br/><br/><br/><br/>
    
    <Container fluid className='que' >
    
    <center><b className="gga" id="myskill">My Skill Sets</b></center>

<center>
  <Row><Col lg={6} md={6} sm={12} xm={12}>

  

    <div className="flip-box ">
    <div className="flip-box-inner ">
    <div className="flip-box-front">
    <center><b className="gga upd " id="myskill">Programming Skill Set</b></center>
    </div>
    <div className="flip-box-back" >
      

      <h4 style={{color:"white"}}>Java</h4>
        <ProgressBar now={now} label={`${now}%`} />
        <br/>
         <h4 style={{color:"white"}}>Cpp/C</h4>
        <ProgressBar now={89} label={`${89}%`} />
        <br/>
         <h4 style={{color:"white"}}>Python</h4>
        <ProgressBar now={57} label={`${57}%`} />
        <br/>
         <h4 style={{color:"white"}}>SQL/MYSQL</h4>
        <ProgressBar now={85} label={`${85}%`} />
    </div>
  </div>
</div>
</Col>

<Col lg={6} md={6} sm={12} xm={12}>
<div className="flip-box  " >
    <div className="flip-box-inner ">
    <div className="flip-box-front">
    <center><b className="gga upd " id="myskill">Web Front-end Skill Set</b></center>
    </div>
    <div className="flip-box-back" >
    <h4 style={{color:"white"}}>React js</h4>
        <ProgressBar now={72} label={`${72}%`} />
        <br/>
         <h4 style={{color:"white"}}>Css3</h4>
        <ProgressBar now={95} label={`${95}%`} />
        <br/>
         <h4 style={{color:"white"}}>Bootstrap</h4>
        <ProgressBar now={92} label={`${92}%`} />
        <br/>
         <h4 style={{color:"white"}}>Html5 + Javascript</h4>
        <ProgressBar now={98} label={`${98}%`} />

     
    </div>
  </div>
</div>
</Col>
</Row>
</center>
<Row>
<center>
<Col lg={6} md={6} sm={12} xm={12}>

<div className="flip-box">
    <div className="flip-box-inner ">
    <div className="flip-box-front">
    <center><b className="gg1 upd " id="myskill">Back End Development</b></center>
    </div>
    <div className="flip-box-back" >
    <h4 style={{color:"white"}}>Node js</h4>
        <ProgressBar now={77} label={`${77}%`} />
        <br/>
         <h4 style={{color:"white"}}>Php</h4>
        <ProgressBar now={58} label={`${58}%`} />
        <br/>
         <h4 style={{color:"white"}}>Express js</h4>
        <ProgressBar now={64} label={`${64}%`} />
        <br/>
         <h4 style={{color:"white"}}>MySQL/Mongo</h4>
        <ProgressBar now={71} label={`${71}%`} />
     
    </div>
  </div>
</div>

</Col>
</center>
</Row>
    </Container>
    </>
  );
}

export default AutoLayoutExample;
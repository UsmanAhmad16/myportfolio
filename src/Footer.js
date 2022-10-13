import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { BsSnapchat } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsWhatsapp} from "react-icons/bs";
import { BsLinkedin} from "react-icons/bs";
import { BsGithub} from "react-icons/bs";

// import {  BsFillEnvelopeOpenFill} from "react-icons/bs";


import { BsInstagram} from "react-icons/bs";

function CustomExample() {
  return (
    <>
{/* 
<footer class="footer-section">
        <div class="container">
            <div class="footer-cta pt-5 pb-5">
                <div class="row">
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                        
                            <i class="fas fa-map-marker-alt" style={{fontSize:"50px"}}><BsFillEnvelopeOpenFill /></i>
                            <div class="cta-text">
                                <h4>Find us </h4>
                                
                                <span>1010 Avenue, sw 54321, chandigarh</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="fas fa-phone"></i>
                            <div class="cta-text">
                                <h4>Call us</h4>
                                <span>9876543210 0</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="far fa-envelope-open"></i>
                            <div class="cta-text">
                                <h4>Mail us</h4>
                                <span>mail@info.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-content pt-5 pb-5">
                <div class="row">
                    <div class="col-xl-4 col-lg-4 mb-50">
                        <div class="footer-widget">
                            <div class="footer-logo">
                                <a href="index.html"><img src="https://i.ibb.co/QDy827D/ak-logo.png/" class="img-fluid" alt="logo"/></a>
                            </div>
                            <div class="footer-text">
                                <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                                elit,Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div class="footer-social-icon">
                                <span>Follow us</span>
                                <a href="#"><i class="fab fa-facebook-f facebook-bg"></i></a>
                                <a href="#"><i class="fab fa-twitter twitter-bg"></i></a>
                                <a href="#"><i class="fab fa-google-plus-g google-bg"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div class="footer-widget">
                            <div class="footer-widget-heading">
                                <h3>Useful Links</h3>
                            </div>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">about</a></li>
                                <li><a href="#">services</a></li>
                                <li><a href="#">portfolio</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Our Services</a></li>
                                <li><a href="#">Expert Team</a></li>
                                <li><a href="#">Contact us</a></li>
                                <li><a href="#">Latest News</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div class="footer-widget">
                            <div class="footer-widget-heading">
                                <h3>Subscribe</h3>
                            </div>
                            <div class="footer-text mb-25">
                                <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                            </div>
                            <div class="subscribe-form">
                                <form action="#">
                                    <input type="text" placeholder="Email Address"/>
                                    <button><i class="fab fa-telegram-plane"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright-area">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div class="copyright-text">
                            <p>Copyright &copy; 2018, All Right Reserved <a href="https://codepen.io/anupkumar92/">Anup</a></p>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                        <div class="footer-menu">
                            <ul>
                                <li><div href="#">Home</div></li>
                                <li><div href="#">Terms</div></li>
                                <li><div href="#">Privacy</div></li>
                                <li><div href="#">Policy</div></li>
                                <li><div href="#">Contact</div></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>







 */}


    <div>
      <Card className='fot' style={{backgroundColor:"black" }}>
      <Container>
      <br/>
      <center><b className="e1"style={{ fontSize:"37px" }} id="contect">Get In Touch</b></center>

     <Row  style={{marginTop:".3em" ,color:"white"}}>
        
        <Col  xs={12} md={12} lg={12}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione odio laudantium placeat dignissimos quia doloribus vel mollitia repellendus dicta. Debitis ipsum eaque provident et dolores iste, rem error. Rem, iusto.
        <br/><br/>
        </Col>
      
      </Row>

      <Row>
        <Col xs={12} md={6} lg={6}>
         <div style={{display:"flex"}}>
         <div >
         <img
          className="ad"
          src="add2.png"
          alt="First slide"
        />
         </div>
         <div style={{marginTop:"3.3em",marginLeft:"1em" ,color:"white"}}><h4>Adress</h4><b>Taxila, Rawalpindi, Pakistan</b></div>
         </div>
         <div style={{display:"flex"}}>
         <div>
          <img
          className="ad"
          src="mob.png"
          alt="First slide"
        /></div>
         <div style={{marginTop:"3.3em",marginLeft:"1em",color:"white"}}><h4>Phone</h4><b>+92 342 5134657</b></div>
         </div>
         <div style={{display:"flex"}}>
         <div >
         <img
          className="ad"
          src="mail.png"
          alt="First slide"
        />
         </div>
         <div style={{marginTop:"3.3em",marginLeft:"1em",color:"white"}}><h4>Email</h4><b>usmanahmad16961@gmail.com</b></div>
         </div>
        </Col>
        <Col xs={6}>
        
        <Card style={{ width: '21.5rem', height:"23rem" ,marginTop:"0.5em",marginBottom:"1em" }}>
        <br/>
        <h3 style={{padding:" 0em "}}><center>Contact Hours (24hrs Format)</center></h3>
        <div style={{display:"block"}}>
      <Card.Body className='tim'>
      
       <div style={{width: '12rem', height:"12rem" ,marginTop:"1em",marginLeft:"4em" }}>
        <h6>Monday</h6><p>16:00 - 23:00</p>
        <h6>Wednesday</h6><p>16:00 - 23:00</p>
        <h6>Friday</h6><p>15:00 - 23:00</p>
        </div>
       <div style={{width: '12rem', height:"12rem" ,marginTop:"0em",marginLeft:"2em"}}>
       <h6>Tuesday</h6><p>16:00 - 23:00</p>
        <h6>Thursday</h6><p>16:00 - 23:00</p>
        <h6>Saturday</h6><p>10:00 - 23:00</p>
         </div>
         
       
        
       
        
         
        
        
      </Card.Body>
      <center><h6 >Saturday</h6><p>10:00 - 23:00</p></center>
      </div>
    </Card>

        </Col>
      </Row>
    </Container>


<center>
<button className="cc" onClick={() => window.open("https://www.linkedin.com/login", '_blank')} style={{backgroundColor:"#0874b4"}} ><BsLinkedin /></button>
<button className="cc" onClick={() => window.open("https://www.instagram.com/</center>", '_blank')} style={{backgroundColor:"#e45c7c"}}><BsInstagram /></button>

<button className="cc" onClick={() => window.open("https://www.whatsapp.com/", '_blank')} style={{backgroundColor:"rgb(50, 238, 50)"}} ><BsWhatsapp /></button>
<button className="cc" onClick={() => window.open("https://www.snapchat.com/", '_blank')} ><BsSnapchat /></button>
<button className="cc" onClick={() => window.open("https://www.youtube.com/", '_blank')} style={{backgroundColor:"red"}}><BsYoutube/></button>
<button className="cc" onClick={() => window.open("https://github.com/usman__16", '_blank')} style={{backgroundColor:"purple"}}><BsGithub/></button>
<br/><h6 className="l2">Join us</h6>

</center>
<div className="lll">
<Card.Link className="ll"  href="https://react-bootstrap.github.io/components/cards/">Terms of Use   </Card.Link><span style={{color:"white"}}>   |  </span>

<Card.Link className="ll"  href="https://react-bootstrap.github.io/components/cards/">Peivacy Policy </Card.Link><span style={{color:"white"}}>   |  </span>
<Card.Link className="ll"  href="https://react-bootstrap.github.io/components/cards/">User Agrement</Card.Link>

<div className="l3">© 2022 Businuss 2 Community. All Rights Reserved</div>


</div>
    </Card>
    </div>
    </>
  );
}

export default CustomExample;
// import Carousel from 'react-bootstrap/Carousel';
import Li from "./Li"

function UncontrolledExample() {
  return (<>
   <br/><br/><br/><br/><br/>
<center>
<b className="gg1"  id="team">My Team</b>

   <ul className="three">
   <Li 
    img="saad1.png"
    name="Saad Zafar"
    fb="https://www.facebook.com/profile.php?id=100085596087786"
    skype="https://web.skype.com/"
    twitter="https://twitter.com/home"
    behance="https://www.behance.net/"
    cap="Founder of Lorem dolor web site. Loves Verdana."
   />

   <Li
    img="sohail.jpg"
    name="Sohail Asghar"
    fb="https://www.facebook.com/sohail.asghar.161214"
    skype="https://web.skype.com/"
    twitter="https://twitter.com/home"
    behance="https://www.behance.net/"
    cap="Times New Roman but in love with Verdana Bold."
    />

  <Li
    img="ka.jpg"
    name="Kashan Latif"
    fb="https://www.facebook.com/kashan.latif.142"
    skype="https://web.skype.com/"
    twitter="https://twitter.com/home"
    behance="https://www.behance.net/"
    cap="Founder of Lorem dolor web site. Loves Verdana."
    />  

<Li 
    img="hamza.png"
    name="Hamza Khan"
    fb="https://www.facebook.com/hamxakhan037"
    skype="https://web.skype.com/"
    twitter="https://twitter.com/hamxakhan037"
    behance="https://www.behance.net/"
    cap="Founder of Lorem dolor web site. Loves Verdana."
   />
</ul>
</center></>
  )}
export default UncontrolledExample;
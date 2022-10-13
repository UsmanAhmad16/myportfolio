function Lilll(props){

return(
    <li className="transition">
    <div className="wrapper"> <img style={{height:"130px"}} className="transition ok" src={props.img} alt='aaa'/>
      <ul className="social">
        <li>{props.cap}<br/>
          Find him on:</li>
        <li className="transition"><div href="https://www.facebook.com"><img  onClick={() => window.open(props.twitter , '_blank')}  src="http://dooreight.com/codepen/people/twitter.svg" alt='aaa'/></div></li>
        <li className="transition"><div href="#"><img  onClick={() => window.open(props.behance, '_blank')}  src="http://dooreight.com/codepen/people/behance.svg" alt='aaa'/></div></li>
        <li className="transition"><div href="#"><img  onClick={() => window.open(props.fb, '_blank')}  src="http://dooreight.com/codepen/people/facebook.svg" alt='aaa'/></div></li>
        <li className="transition"><div href="#"><img  onClick={() => window.open(props.skype, '_blank')} src="http://dooreight.com/codepen/people/skype.svg" alt='aaa'/></div></li>
      </ul>
      <span className="transition">
      <h3>{props.name}<em>Front end developer</em></h3>
      <img style={{borderRadius:"4em"}}
       className="mamber-img ok" src={props.img} alt='aaa'
       />
      <h3>{props.name}</h3>
      <i>more</i> </span> </div>
  </li>)
}
export default Lilll;
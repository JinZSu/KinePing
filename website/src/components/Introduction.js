import React from 'react';
import HamburgerSVG from "./HamburgerSVG.js";
import Slider from "./Slider.js";
import Chad from "./Chad.js";
import Social from '../images/Sayed.jpg';
import Words from "./Words.js"
import './Introduction.css';
import { TweenLite, Power2, Power3, TimelineLite, opacity } from "gsap"

class Introduction extends React.Component{
   constructor(props){
      super(props);
      this.Date = null;
      this.Hero = null;
      this.Slider = null;
      this.Logo = null;
      this.Hamburger = null;
      this.myTween = new TimelineLite({ paused: false });
   }

  componentDidMount(){
    // use the node ref to create the animation
    this.myTween.fromTo(this.Hero, 1, {height:"0%"},{height:"80%",ease:Power2.easeInOut})
    .fromTo(this.Date,1,{opacity:0, x:30},{opacity: 1, x: 0})
    .fromTo(this.Hero, 1.2, {width:"100%"},{width:"80%",ease:Power2.easeInOut})
    .fromTo(this.Slider, 1.2, {x:"-100%"},{x:"0%",ease:Power2.easeInOut},"-=1.2")
    .fromTo(this.Logo,0.5,{opacity:0, x:30},{opacity: 1, x: 0},"-=0.5")
    .fromTo(this.Hamburger,0.5,{opacity:0, x:30},{opacity: 1, x: 0},"-=0.5");

  }

  render(){
  	return(
		<div >
        <div className="background">
	      <header>
	        <nav>
	          <h3 className = "logo" ref={div => this.Logo = div}>  </h3>
	        </nav>
	          <section>
		        <div className="Hero" ref={section => this.Hero = section} >
		          <img className="Chad" src={Social} />
		          <h3 className="headline" ref={section => this.Date = section}> Next Date? </h3>
              <Words/>
		        </div>
	          </section>
	        </header>
          </div>
        <div className="slider" ref={section => this.Slider = section}></div>
	    </div>
	)
  };
}

export default Introduction;

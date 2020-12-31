import React, {Component,Fragment} from 'react';
import Fade from 'react-reveal/Fade';

import { TweenLite, Power2, Power3, TimelineLite, opacity } from "gsap";

class AboutMe extends React.Component{
   constructor(props){
      super(props);
      this.myTween = new TimelineLite({ paused: false });
   }

  componentDidMount(){
    // use the node ref to create the animation

  }

  render(){
  	return(
      <div>
      <Fragment>
        <div className='DivMe'>
          <Fade top>
            <h1 className='h1Me'>'Block 1'</h1>
          </Fade>
        </div>
      </Fragment>
      </div>

    )
  };
}

export default AboutMe;

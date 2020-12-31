import React from 'react'
import Anime from 'react-anime'
import "./Words.css"

const Words = (props) =>{
    var text="MadeWithLove"
    // const addSpan = (note: any, styles: any) => {
    //  return [...note].map(letter => <span class='letter' style={styles}>{letter}</span>)
    // }

    const addSpan = (note: any) => {
     return [...note].map((letter,i) => <span class='letter' key={i}>{letter}</span>)
    }

    let animeprop = {
	targets:'.ml16 .letter',
	translateY:[-100,0],
	easing:"easeOutExpo",
	start:10000000000000000000,
	duration:1800,
	opacity:[-0.2,1.2],
	delay: (el, i) => i * 30 + 2500
    };

	return(
		<h1 className="ml16" >
        <Anime {...animeprop}>
		{[...text].map((letter,i) => <span className='letter' key={i}>{letter}</span>)}
	    </Anime>
	    </h1>
	);
	
}

export default Words; 
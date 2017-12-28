import React from 'react';

const Banner = (props) => {
  return (
  	<section className={props.classes} id='abtBanner'>
  		<div>
  			<h2>
  				{
  					'How I can help'.split('').map((letter, i) => {
  						if(letter === ' ') return <div 
  																			  key={i}
  																			  style={{
  																			  	transitionDelay: i/10 + 's'
  																			  }}>&nbsp;</div>
  						return <div 
  										key={i}
  										style={{
										  	transitionDelay: i/30 + 's'
										  }}>{letter}</div>
  					})
  				}
  			</h2>
  		</div>
  	</section>    
  );
}

export default Banner;

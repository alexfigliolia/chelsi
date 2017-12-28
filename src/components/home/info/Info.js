import React from 'react';

const Info = (props) => {
  return (
  	<section className="info" id='info'>
  		<div>
  			<div className={props.lcClasses} id='lc'>
  				<h2>Life Coaching</h2>
  				<p>Stuff about stuff with maybe a little more stuff. Text about things and more things. Perhaps some stuff about things or somethings about stuff. Stuff about stuff with maybe a little more stuff. Text about things and more things. Perhaps some stuff about things or somethings about stuff.</p>
  			</div>
  			<div className={props.enClasses} id='en'>
  				<h2>Emotional Nutrition</h2>
  				<p>Stuff about stuff with maybe a little more stuff. Text about things and more things. Perhaps some stuff about things or somethings about stuff. Stuff about stuff with maybe a little more stuff. Text about things and more things. Perhaps some stuff about things or somethings about stuff.</p>
  			</div>
  		</div>
  	</section>  
  );
}

export default Info;

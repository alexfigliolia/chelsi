import React from 'react';
import Text from  '../homeCopy.js';

const Info = (props) => {
  return (
  	<section className="info" id='info'>
  		<div>
  			<div className={props.lcClasses} id='lc'>
  				<h2>{Text.header1}</h2>
  				<p>{Text.paragraph1}</p>
  			</div>
  			<div className={props.enClasses} id='en'>
  				<h2>{Text.header2}</h2>
  				<p>{Text.paragraph2}</p>
  			</div>
  		</div>
  	</section>  
  );
}

export default Info;

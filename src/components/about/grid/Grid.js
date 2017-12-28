import React from 'react';

const Grid = (props) => {
  return (
    <section className={props.classes}>
    	<div>
    		<div 
    			style={{ transitionDelay: '1.0s'}}>
    			<div className='g-img'></div>
    			<div className='g-text'>
    				<h3>Life Coaching</h3>
    			</div>
    		</div>
    		<div 
    			style={{ transitionDelay: '1.1s'}}>
    			<div className='g-img'></div>
    			<div className='g-text'>
    				<h3>Nutrition</h3>
    			</div>
    		</div>
    		<div 
    			style={{ transitionDelay: '1.2s'}}>
    			<div className='g-img'></div>
    			<div className='g-text'>
    				<h3>Spirituality</h3>
    			</div>
    		</div>
    		<div 
    			style={{ transitionDelay: '1.3s'}}>
    			<div className='g-img'></div>
    			<div className='g-text'>
    				<h3>Another Thing</h3>
    			</div>
    		</div>
    	</div>
    	<button>Schedule a Consultation</button>
    </section>  
  );
}

export default Grid;
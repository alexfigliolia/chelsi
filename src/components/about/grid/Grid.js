import React from 'react';
import Box from './Box';


const Grid = (props) => {
  return (
    <section className={props.classes}>
    	<div>
        <Box 
          delay='1.0s'
          text='Life Coaching' />
        <Box 
          delay='1.1s'
          text='Nutrition' />
        <Box 
          delay='1.2s'
          text='Spirituality' />
        <Box 
          delay='1.3s'
          text='Another Thing' />
    	</div>
    	<button>Schedule a Consultation</button>
    </section>  
  );
}

export default Grid;
import React from 'react';
import Box from './Box';


const Grid = (props) => {
  return (
    <section className={props.classes}>
    	<div>
        <Box 
          delay='1.0s'
          text='Life Coaching'
          desc='Reach your goals with an expansive evaluation of your strengths and decision making' />
        <Box 
          delay='1.1s'
          text='Nutrition'
          desc='Learn what to eat and when to maximize your energy and support mental health' />
        <Box 
          delay='1.2s'
          text='Spirituality'
          desc='Become in touch with your beliefs. Syncronize your mind and body' />
        <Box 
          delay='1.3s'
          text='Another Thing'
          desc='Four boxes look better than three. Always eat your vegetables' />
    	</div>
    	<button>Schedule a Consultation</button>
    </section>  
  );
}

export default Grid;
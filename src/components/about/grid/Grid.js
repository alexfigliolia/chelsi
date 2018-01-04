import React from 'react';
import Box from './Box';
import Text from '../aboutCopy';

const Grid = (props) => {
  return (
    <section className={props.classes}>
    	<div>
        <Box 
          delay='1.0s'
          text={Text.header1}
          desc={Text.paragraph1} />
        <Box 
          delay='1.1s'
          text={Text.header2}
          desc={Text.paragraph2} />
        <Box 
          delay='1.2s'
          text={Text.header3}
          desc={Text.paragraph3} />
        <Box 
          delay='1.3s'
          text={Text.header4}
          desc={Text.paragraph4} />
    	</div>
    	<button 
        onClick={props.changePage}
        data-page='contact'>Schedule a Consultation</button>
    </section>  
  );
}

export default Grid;
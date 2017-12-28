import React from 'react';

const Menu = (props) => {
  return (
  	<section className={props.classes}>
  		<div>
  			<a
          onClick={props.changePage}
          data-page="home"
          className={props.page === 'home' ? 'active' : ''}
  				style={{ 
  					transitionDelay: props.bool === false ? '0.4s' : '0s' 
  				}}>Home</a>
  			<a 
          onClick={props.changePage}
          data-page="about"
          className={props.page === 'about' ? 'active' : ''}
  				style={{ 
  					transitionDelay: props.bool === false ? '0.3s' : '0.1s'
  				}}>About</a>
  			<a 
          onClick={props.changePage}
          data-page="contact"
          className={props.page === 'contact' ? 'active' : ''}
  				style={{ 
  					transitionDelay: props.bool === false ? '0.2s' : '0.2s'
  				}}>Contact</a>
  		</div>
  	</section> 
  );
}

export default Menu;

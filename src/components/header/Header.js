import React from 'react';
import Burger from './burger/Burger';

const Header = (props) => {
  return (
  	<header className={props.classes}>
  		<div>
        <h1 
          onClick={props.changePage}
          data-page='home'>Chelsi</h1>
  			<Burger 
  				classes={props.burgerClasses}
  				toggleMenu={props.toggleMenu} />
        <nav>
          <a 
            className={props.page === 'home' ? 'active' : ''}
            data-page='home'
            onClick={props.changePage}>Home</a>
          <a 
            className={props.page === 'about' ? 'active' : ''}
            data-page='about'
            onClick={props.changePage}>About</a>
          <a 
            className={props.page === 'contact' ? 'active' : ''}
            data-page='contact'
            onClick={props.changePage}>Contact</a>
        </nav>
  		</div>
  	</header>    
  );
}

export default Header;

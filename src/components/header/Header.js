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
          <div 
            className={props.page === 'home' ? 'active' : ''}
            data-page='home'
            onClick={props.changePage}>
            {
              'Home'.split('').map((letter, i) => {
                return <div key={i} style={{transitionDelay: `${i/30}s`}}>{letter}</div>
              })
            }
            <a className='underlink'>
              {
                'Home'.split('').map((letter, i) => {
                  return <div key={i} style={{transitionDelay: `${i/30}s`}}>{letter}</div>
                })
              }
            </a>
          </div>
          <div 
            className={props.page === 'about' ? 'active' : ''}
            data-page='about'
            onClick={props.changePage}>
            {
              'About'.split('').map((letter, i) => {
                return <div key={i} style={{transitionDelay: `${i/30}s`}}>{letter}</div>
              })
            }
            <a className='underlink'>
              {
                'About'.split('').map((letter, i) => {
                  return <div key={i} style={{transitionDelay: `${i/30}s`}}>{letter}</div>
                })
              }
            </a>
          </div>
          <div 
            className={props.page === 'contact' ? 'active' : ''}
            data-page='contact'
            onClick={props.changePage}>
            {
              'Contact'.split('').map((letter, i) => {
                return <div key={i} style={{transitionDelay: `${i/30}s`}}>{letter}</div>
              })
            }
            <a className='underlink'>
              {
                'Contact'.split('').map((letter, i) => {
                  return <div key={i} style={{transitionDelay: `${i/30}s`}}>{letter}</div>
                })
              }
            </a>
          </div>
        </nav>
  		</div>
  	</header>    
  );
}

export default Header;

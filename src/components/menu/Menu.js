import React from 'react';

const Menu = (props) => {
  return (
  	<section className={props.classes}>
  		<div>
  			<div
          onClick={props.changePage}
          onTouchStart={e => e.target.classList.add('anim')}
          onTouchEnd={e => e.target.classList.remove('anim')}
          data-page="home"
          className={props.page === 'home' ? 'active' : ''}
  				style={{ 
  					transitionDelay: props.bool === false ? '0.4s' : '0s' 
  				}}>
            {
              'Home'.split('').map((letter, i) => {
                return <div key={i} style={{transitionDelay: `${i/20}s`}}>{letter}</div>
              })
            }
            <a className='underlink'>
              {
                'Home'.split('').map((letter, i) => {
                  return <div key={i} style={{transitionDelay: `${i/20}s`}}>{letter}</div>
                })
              }
            </a>
          </div>
  			<div 
          onClick={props.changePage}
          onTouchStart={e => e.target.classList.add('anim')}
          onTouchEnd={e => e.target.classList.remove('anim')}
          data-page="about"
          className={props.page === 'about' ? 'active' : ''}
  				style={{ 
  					transitionDelay: props.bool === false ? '0.3s' : '0.1s'
  				}}>
            {
              'About'.split('').map((letter, i) => {
                return <div key={i} style={{transitionDelay: `${i/20}s`}}>{letter}</div>
              })
            }
            <a className='underlink'>
              {
                'About'.split('').map((letter, i) => {
                  return <div key={i} style={{transitionDelay: `${i/20}s`}}>{letter}</div>
                })
              }
            </a>
          </div>
  			<div 
          onClick={props.changePage}
          onTouchStart={e => e.target.classList.add('anim')}
          onTouchEnd={e => e.target.classList.remove('anim')}
          data-page="contact"
          className={props.page === 'contact' ? 'active' : ''}
  				style={{ 
  					transitionDelay: props.bool === false ? '0.2s' : '0.2s'
  				}}>
            {
              'Contact'.split('').map((letter, i) => {
                return <div key={i} style={{transitionDelay: `${i/20}s`}}>{letter}</div>
              })
            }
            <a className='underlink'>
              {
                'Contact'.split('').map((letter, i) => {
                  return <div key={i} style={{transitionDelay: `${i/20}s`}}>{letter}</div>
                })
              }
            </a>
          </div>
  		</div>
  	</section> 
  );
}

export default Menu;

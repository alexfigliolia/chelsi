import React from 'react';

const Loader = (props) => {
  return (
		<section className={props.classes}>
      <div>
        <div class="showbox">
          <div class="load">
            <svg class="circular" viewBox="25 25 50 50">
              <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/>
            </svg>
          </div>
        </div>
      </div>
  	</section>    
  );
}

export default Loader;

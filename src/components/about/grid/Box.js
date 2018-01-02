import React, { PureComponent } from 'react';

export default class Box extends PureComponent {
  constructor(props) {
  	super(props);
  	this.state = {
  		classes: ''
  	}
  }

  handleEnter = (e) => this.setState({classes: 'box-enter'});

  handleLeave = (e) => this.setState({classes: ''});

  render = () => {
    return (
    	<div 
    		className={this.state.classes}
    		style={{ transitionDelay: this.props.delay }}
    		onTouchStart={this.handleEnter}
    		onMouseEnter={this.handleEnter}
    		onTouchEnd={this.handleLeave}
    		onMouseLeave={this.handleLeave}>
    		<div className='g-img'></div>
  			<div className='g-text'>
  				<h3>{this.props.text}</h3>
          <p>{this.props.desc}</p>
  			</div>
    	</div>    
    );
  }
}

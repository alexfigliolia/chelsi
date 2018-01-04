import React, { Component } from 'react';
import Text from './contactCopy';

export default class Contact extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
  		name: '',
  		email: '',
  		message: ''
  	}
  }

  focus = (e) => e.target.parentNode.classList.add('focus');

  blur = (e) => {
  	if(e.target.value === '') e.target.parentNode.classList.remove('focus');
  }

  render = () => {
    return (
    	<section className='contact'>
    		<div>
    			<div className='text'>
	    			<p>{Text.line1}</p>
	    			<p>{Text.line2}</p>
	    			<h2>{Text.line3}</h2>
    			</div>
    			<div className='send'>
    				<form
    					method="POST"
    					action="https://formspree.io/alexfigliolia@gmail.com">
    					<div className='input'>
    						<label htmlFor='name'>Name</label>
	    					<input
	    						onFocus={this.focus}
	    						onBlur={this.blur} 						
	    						onChange={e => this.setState({name: e.target.value})}
	    						name='Name'
	    						id='name'
	    						type='text'
	    						value={this.state.name}
	    						required={true} />
	    				</div>
    					<div className='input'>
    						<label htmlFor='email'>Email</label>
    						<input
    							onFocus={this.focus}
    							onBlur={this.blur}
	    						onChange={e => this.setState({email: e.target.value})}
    							name='Email'
    							id='email'
	    						type='email'
	    						value={this.state.email}
	    						required={true} />
    					</div>
    					<div className='input'>
    						<label htmlFor='message'>Message</label>
    						<textarea
	    						onChange={e => this.setState({message: e.target.value})}
    							onFocus={this.focus}
    							onBlur={this.blur}
    							name='Message'
    							id='message'
	    						value={this.state.message}
	    						required={true}></textarea>
    					</div>
    					<input
    						className='submit'
    						type='submit' />
    				</form>
    			</div>
    		</div>
    	</section>  
    );
  }
}

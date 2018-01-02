import React, { Component } from 'react';
import Banner from './banner/Banner';
import Grid from './grid/Grid';

export default class About extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
  		bannerClasses: 'abt-banner',
  		gridClasses: 'grid'
  	}
  }

  componentDidMount = () => {
  	setTimeout(() => {
      this.setState({
        bannerClasses: 'abt-banner abt-banner-enter',
        gridClasses: 'grid grid-enter'
      });
    }, 1000);
  }

  componentWillUnmount = () => {
    this.setState({ bannerClasses: 'abt-banner', gridClasses: 'grid' });
  }

  render = () => {
    return (
    	<section className='about'>
    		<div>
    			<Banner
    				classes={this.state.bannerClasses} />
    			<Grid 
    				classes={this.state.gridClasses}
            changePage={this.props.changePage} />
    		</div>
    	</section>    
    );
  }
}

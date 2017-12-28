import React, { Component } from 'react';
import ScrollMagic from 'scrollmagic';
import Banner from './banner/Banner';
import Grid from './grid/Grid';

export default class About extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
  		bannerClasses: 'abt-banner',
  		gridClasses: 'grid'
  	}
  	this.ctrl = null;
  }

  componentDidMount = () => {
  	setTimeout(() => {
      this.ctrl = new ScrollMagic.Controller();
      const banner = new ScrollMagic.Scene({triggerElement: "#abt-banner", triggerHook: 0})
      .on("enter", () => { this.setState({bannerClasses: 'abt-banner abt-banner-enter'}) })
      .on("leave", () => { this.setState({bannerClasses: 'abt-banner'}) })
      .addTo(this.ctrl);
      const boxes = new ScrollMagic.Scene({triggerElement: "#abt-banner", triggerHook: 0})
      .on("enter", () => { this.setState({gridClasses: 'grid grid-enter'}) })
      .on("leave", () => { this.setState({gridClasses: 'grid'}) })
      .addTo(this.ctrl);
    }, 1000);
  }

  componentWillUnmount = () => {
    this.ctrl = this.ctrl.destroy(true);
    this.setState({ bannerClasses: 'abt-banner', gridClasses: 'grid' });
  }

  render = () => {
    return (
    	<section className='about'>
    		<div>
    			<Banner
    				classes={this.state.bannerClasses} />
    			<Grid 
    				classes={this.state.gridClasses} />
    		</div>
    	</section>    
    );
  }
}

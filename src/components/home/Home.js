import React, { PureComponent } from 'react';
import ScrollMagic from 'scrollmagic';
import Banner from './banner/Banner';
import Info from './info/Info';

export default class Home extends PureComponent {
  constructor(props) {
  	super(props);
    this.state = {
      bannerClasses: 'banner',
      lcClasses: 'lc',
      enClasses: 'lc en'
    }
    this.ctrl = null;
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ bannerClasses: 'banner banner-enter' });
    }, 1000);

    this.ctrl = new ScrollMagic.Controller();
    new ScrollMagic.Scene({triggerElement: '#heading', triggerHook: 0})
    .on('enter', () => { this.setState({ bannerClasses: 'banner banner-enter banner-fade' }) })
    .on('leave', () => { this.setState({ bannerClasses: 'banner banner-enter' }) })
    .addTo(this.ctrl);
    new ScrollMagic.Scene({triggerElement: "#lc", triggerHook: 0.75})
    .on("enter", () => { this.setState({lcClasses: 'lc lc-show'}) })
    .on("leave", () => { this.setState({lcClasses: 'lc'}) })
    .addTo(this.ctrl);
    new ScrollMagic.Scene({triggerElement: "#en", triggerHook: 0.75})
    .on("enter", () => { this.setState({enClasses: 'lc en en-show'}) })
    .on("leave", () => { this.setState({enClasses: 'lc en'}) })
    .addTo(this.ctrl);
  }

  componentWillUnmount = () => {
    this.ctrl = this.ctrl.destroy(true);
    this.setState({ bannerClasses: 'banner', lcClasses: 'lc', enClasses: 'en' });
  }

  render = () => {
    return (
    	<div className="home">
    		<Banner
          classes={this.state.bannerClasses} />
    		<Info
          lcClasses={this.state.lcClasses}
          enClasses={this.state.enClasses} />
    	</div>
    );
  }
}

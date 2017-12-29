import React, { PureComponent } from 'react';

export default class Banner extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      moveX: null,
      mouseX: 0,
      mouseY: 0,
      tDur: 0
    }
  }

  componentDidMount = () => {
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && window.DeviceOrientationEvent){
      window.addEventListener('deviceorientation', this.updateMoveX, true);
    } 
  }

  componentWillUnmount = () => {
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && window.DeviceOrientationEvent){
      window.removeEventListener('deviceorientation', this.updateMoveX, true);
    } 
  }

  updateMoveX = (e) => this.setState({ moveX: ((e.gamma + 90) * 100) / 180 });

  handleEnter = (e) => {
    const px = e.type === 'mouseenter' ? e.pageX : e.touches[0].pageX;
    const py = e.type === 'mouseenter' ? e.pageY: e.touches[0].pageY;
    const x = (px - (window.innerWidth/2)) / 20;
    const y = (py - (window.innerHeight/2)) / 20
    this.setState({mouseX: x, mouseY: y, tDur: 0.3});
  }

  handleMove = (e) => {
    const px = e.type === 'mousemove' ? e.pageX : e.touches[0].pageX;
    const py = e.type === 'mousemove' ? e.pageY: e.touches[0].pageY;
    const x = (px - (window.innerWidth/2)) / 20;
    const y = (py - (window.innerHeight/2)) / 20
    this.setState({mouseX: x, mouseY: y, tDur: 0});
  }

  handleLeave = () => this.setState({mouseX: 0, mouseY: 0, tDur: 0.3});

  render = () => {
    return (
    	<section 
        className={this.props.classes} 
        id='banner'
        onMouseEnter={this.handleEnter}
        onMouseMove={this.handleMove}
        onMouseLeave={this.handleLeave}
        onTouchStart={this.handleEnter}
        onTouchMove={this.handleMove}
        onTouchEnd={this.handleLeave}
        style={{
          backgroundPosition: `${this.state.moveX}% 100%`,
        }}>
    		<div 
          className='center' 
          id='heading'
          style={{
            transform: `translateX(${this.state.mouseX}px) translateY(${this.state.mouseY}px)`,
            transitionDuration: `${this.state.tDur}s`
          }}>
          <div className='lines'></div>
    			<div className="lettering">
            <h2>
              {
                'Create'.split('').map((letter, i) => {
                  return <div 
                           key={i}
                           style={{
                            transitionDelay: `${i/10}s`
                           }}>{letter}</div>
                })
              }
            </h2>
            <h2>
              {
                'Peace'.split('').map((letter, i) => {
                  return <div 
                           key={i}
                           style={{
                            transitionDelay: `${(5-i)/10}s`
                           }}>{letter}</div>
                })
              }
            </h2>
          </div>
          <div className='lines'
            style={{
              transformOrigin: '0% 50%'
            }}></div>
          <div className='serves'>
            <h3>Life Coaching</h3>
          </div>
    		</div>
        <div className='scroll'></div>
    	</section>
    );
  }
}

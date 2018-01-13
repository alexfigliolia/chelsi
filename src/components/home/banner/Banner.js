import React, { PureComponent } from 'react';

export default class Banner extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      moveX: null,
      tDur: '0s',
      mouseX: 0,
      mouseY: 0
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

  mouseEnter = (e) => {
    const x = (e.clientX - (window.innerWidth/2)) / 20;
    const y = (e.clientY - (window.innerHeight/2)) / 20;
    this.setState({ tDur: '0.5s', mouseX: x, mouseY: y });
  }

  mouseMove = (e) => {
    e.persist();
    setInterval(this.followMouse(e), 50);
  }

  followMouse = (e) => {
    const x = (e.clientX - (window.innerWidth/2)) / 20;
    const y = (e.clientY - (window.innerHeight/2)) / 20;
    this.setState({ tDur: '0s', mouseX: x, mouseY: y });
  }

  mouseLeave = (e) => this.setState({ tDur: '0.5s', mouseX: 0, mouseY: 0, });

  render = () => {
    return (
    	<section 
        className={this.props.classes} 
        id='banner'
        style={{ backgroundPosition: `${this.state.moveX}% 100%` }}
        onMouseEnter={this.mouseEnter}
        onMouseMove={this.mouseMove}
        onMouseLeave={this.mouseLeave}>
{/*        <div className='border'></div>*/}
    		<div 
          className='center' 
          id='heading'
          style={{
            transform: `translateX(${this.state.mouseX}px) translateY(${this.state.mouseY}px)`,
            transitionDuration: this.state.tDur
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

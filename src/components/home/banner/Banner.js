import React, { PureComponent } from 'react';

export default class Banner extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      moveX: null
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

  render = () => {
    return (
    	<section 
        className={this.props.classes} 
        id='banner'
        style={{
          backgroundPosition: `${this.state.moveX}% 100%`,
        }}>
    		<div>
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

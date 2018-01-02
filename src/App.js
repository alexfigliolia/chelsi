import React, { PureComponent } from 'react';
import ScrollMagic from 'scrollmagic';
import Header from './components/header/Header';
import Menu from './components/menu/Menu';
import Home from './components/home/Home';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Loader from './components/loader/Loader';
import Contact from './components/contact/Contact';
import './App.css';

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      appClasses: 'App',
      burgerClasses: "hamburglar is-open",
      burgerToggle: true,
      menuClasses: "menu",
      headerClasses: "header",
      loaderClasses: 'loader',
      page: 'home'
    }
    this.height = window.innerHeight;
    this.width = window.innerWidth;
    this.ctrl = null;
  }

  componentDidMount = () => {
    this.ctrl = new ScrollMagic.Controller();
    new ScrollMagic.Scene({triggerElement: '#info', triggerHook: 0, offset: -80})
    .on('enter', () => { this.setState({ headerClasses: 'header header-color' }) })
    .on('leave', () => { this.setState({ headerClasses: 'header' }) })
    .addTo(this.ctrl);
  }

  componentWillUnmount = () => {
    this.ctrl = this.ctrl.destroy(true);
  }

  toggleMenu = () => {
    this.setState(prevState => {
      return {
        burgerToggle : !prevState.burgerToggle,
        burgerClasses : (prevState.burgerClasses === "hamburglar is-closed") ? 
                          "hamburglar is-open" : 
                          "hamburglar is-closed",
        menuClasses: (prevState.menuClasses === "menu") ?
                      "menu menu-show" :
                      "menu"
      }
    });
  }

  changePage = (e) => {
    const next = e.target.dataset.page;
    const int = e.target.parentNode.parentNode.classList.contains('menu') ? 800 : 0;
    if(int > 0) this.toggleMenu();
    setTimeout(() => {
      this.setState({ appClasses: 'App trim-height App-scale' }, () => {
        document.body.classList.add('perspective');
      });
    }, int)
    setTimeout(() => { 
      this.setState({ 
        appClasses: 'App trim-height App-scale App-rotate', 
        loaderClasses: 'loader loader-rotate' 
      }); 
    }, int + 500);
    setTimeout(() => { this.setState({ page: next }) }, int + 1000);
    setTimeout(() => {
      this.setState({
        appClasses: 'App trim-height App-scale', 
        loaderClasses: 'loader'
      });
    }, int + 2000);
    setTimeout(() => { this.setState({appClasses: 'App trim-height'}) }, int + 2900);
    setTimeout(() => { 
      this.setState({ appClasses: 'App'}, () => {
        document.body.classList.remove('perspective');
      }); 
    }, int + 3300);
  }

  render = () => {
    return (
      <div className={this.state.appClasses} ref='app'>

        <Header
          classes={this.state.headerClasses}
          burgerClasses={this.state.burgerClasses} 
          toggleMenu={this.toggleMenu}
          page={this.state.page}
          changePage={this.changePage} />

        {
          this.state.page === 'home' &&
          <Home />
        }

        {
          this.state.page === 'about' && 
          <About changePage={this.changePage} />
        }

        {
          this.state.page === 'contact' &&
          <Contact />
        }

        <Footer />
        
        <Menu 
          classes={this.state.menuClasses}
          bool={this.state.burgerToggle}
          page={this.state.page}
          changePage={this.changePage} />

        <Loader 
          classes={this.state.loaderClasses} />

      </div>
    );
  }
}

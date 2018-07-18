import React, { Component } from "react";
import { Power2, TimelineLite } from "gsap";
import './App.css';
import logo from './logo.svg';

class App extends Component {
  constructor(props){
    super(props);
    this.intro = React.createRef(); // shiny new React 16.3 ref API!
    this.logo = React.createRef();
  }

  componentDidMount() {
      const tl = new TimelineLite();
      tl
        .to(this.intro.current, 4.5, { opacity: 1, delay: 1 })
        .to(this.intro.current, 1.5, { opacity: 0 })
        .set(this.logo.current, { opacity: 1, scale: 2.75 })
        .to(this.logo.current, 8, {
          scale: 0.05,
          ease: Power2.easeOut
        })
        .to(this.logo.current, 1.5, { opacity: 0 }, "-=1.5");
    }

  render() {
    return (
      <div className="container">
        <section className="intro" ref={this.intro}>
          <p>A long time ago, in a galaxy far,<br /> far away...
          </p>
        </section>
        <section className="logo" ref={this.logo}>
          <img src={logo} alt="Code Wars logo" />
        </section>
      </div>
    );
  }
}

export default App;

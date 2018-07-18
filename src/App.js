import React, { Component } from "react";
import { TweenLite } from "gsap";
// import './App.css';
// import logo from './logo.svg';

class App extends Component {
  constructor(props){
    super(props);
    this.intro = React.createRef(); // shiny new React 16.3 ref API!
  }

  componentDidMount(){
    TweenLite.to(
      this.intro.current,
      4.5,
      { opacity: 1, delay: 1 }
    );
    TweenLite.to(
      this.intro.current,
      1.5,
      { opacity: 0, delay: 5.5 }
    );
  }

  render() {
    return (
      <div className="container">
        <section className="intro" ref={this.intro}>
          <p>A long time ago, in a galaxy far,<br /> far away....
          </p>
        </section>
      </div>
    );
  }
}

export default App;

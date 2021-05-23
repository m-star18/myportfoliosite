import React, { Component } from 'react';
import '../styles/Hero.css';

class Hero extends Component {
  render() {
    const heroImageSrc = {
      backgroundImage: `url(https://source.unsplash.com/fPkvU7RDmCo)`,
    };
    return(
      <div className="uc-hero">
        <div className="uc-hero-bg" style={heroImageSrc}/>
        <div className="uc-hero-title">Ryusei Ito</div>
        <p>ML engineer</p>
      </div>
    );
  }
}

export default Hero;

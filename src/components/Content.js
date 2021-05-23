import React, { Component } from 'react';
import Works from '../components/Works';
import Hero from "../components/Hero";
import '../styles/Content.css';

class Content extends Component {
  render() {
    return (
      <main className="uc-content">
        <Hero />
        <Works />
      </main>
    );
  }
}

export default Content;

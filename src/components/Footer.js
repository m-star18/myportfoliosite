import React, { Component } from 'react';
import '../styles/Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="uc-footer">
        <div className="uc-footer-menu">
          <a href="" onClick={this.props.handleOpenModal}>About</a>
          <a href="https://twitter.com/masutango18" target="_blank">Twitter</a>
          <a href="https://github.com/m-star18" target="_blank">GitHub</a>
          <a href="https://www.instagram.com/ryusei__0111/" target="_blank">Instagram</a>
        </div>
        <div className="uc-footer-logo"><cite>RI</cite></div>
        <small>&copy; 2021 Ryusei Ito</small>
      </footer>
    );
  }
}

export default Footer;

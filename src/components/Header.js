import React, { Component } from 'react';
import '../styles/Header.css';

class Header extends Component {
  render() {
    return (
      <header className="uc-header">
        <h1 className="uc-header-logo"><a href="/">RI</a></h1>
        <div className="uc-header-menu" role="navigation">
          <a href="" onClick={this.props.handleOpenModal}>About</a>
          <a href="mailto:31807@toyota.kosen-ac.jp">Contact</a>
        </div>
      </header>
    );
  }
}

export default Header;

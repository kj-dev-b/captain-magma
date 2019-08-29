import React from 'react';
import logo from './Captain_Magma.jpg';
import './Home.css';

class About extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className="nav-bar"> 
          <ul className="nav-list">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/server">MCServer</a></li>
          </ul>
        </div>
        <div className="Home-header">
          <img src={logo} className="logo" alt="cm" />
          <h2>About</h2>
        </div>
      </div>
    );
  }
}

export default About;

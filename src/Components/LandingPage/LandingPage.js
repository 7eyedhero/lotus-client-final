import React, { Component } from 'react';
import '../LandingPage/LandingPage.css';
class LandingPage extends Component {
  render() {
    return (
      <div className='Landing'>
        <header>
          <h1>WELCOME!</h1>
        </header>
        <main>
          <h2>LOTUS: Transform Yourself.</h2>
          <p>
            Welcome to LOTUS. A simple RPG game where you empower your character as you empower yourself. Please create
            a new account or log in to begin!
          </p>
        </main>
      </div>
    );
  }
}

export default LandingPage;

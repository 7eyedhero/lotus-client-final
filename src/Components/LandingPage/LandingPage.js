import React, { Component } from 'react';
import '../LandingPage/LandingPage.css';
class LandingPage extends Component {
  render() {
    return (
      <div className='Landing'>
        <header>
          <h1>WELCOME TO LOTUS!</h1>
        </header>
        <main>
          <img src={require('./pixel-castle.gif')} alt='Pixel castle made by Nathan Hamley' />
          <p>
            LOTUS. A simple, text-based RPG game where you can complete quests, earn rewards and power-up your unique
            character. Please create a new account or log in to begin!
          </p>
        </main>
      </div>
    );
  }
}

export default LandingPage;

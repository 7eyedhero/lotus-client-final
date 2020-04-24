import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Hyph } from '../Utils/Utils';
import TokenService from '../../services/token-service';
import './Header.css';
import HeaderContext from '../../contexts/HeaderContext';

export default class Header extends Component {
  static contextType = HeaderContext;

  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    this.context.resetLogIn();
  };

  renderLogoutLink() {
    return (
      <div className='Header__logged-in'>
        {console.log(TokenService.getInfoFromToken())}
        <span>
          Welcome, <strong>{TokenService.getInfoFromToken().sub}</strong>!
        </span>
        <Link className='link' onClick={this.handleLogoutClick} to='/login'>
          Logout
        </Link>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <div className='Header__not-logged-in'>
        <Link className='link' to='/createaccount'>
          Register
        </Link>
        <Hyph />
        <Link className='link' to='/login'>
          Log in
        </Link>
      </div>
    );
  }

  render() {
    return (
      <nav className='Header'>
        <h1>
          <Link to='/lotus'>LOTUS</Link>
        </h1>
        {TokenService.hasAuthToken() ? this.renderLogoutLink() : this.renderLoginLink()}
      </nav>
    );
  }
}

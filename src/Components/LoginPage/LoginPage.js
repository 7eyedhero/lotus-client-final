import React, { Component } from 'react';
import TokenService from '../../services/token-service';
import { Link } from 'react-router-dom';
import AuthApiService from '../../services/auth-api-service';
import { Button } from '../Utils/Utils';

export default class LoginPage extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  };

  state = { error: null };

  handleSubmit = (ev) => {
    ev.preventDefault();
    this.setState({ error: null });
    const { user_name, password } = ev.target;

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value
    })
      .then((res) => {
        user_name.value = '';
        password.value = '';
        TokenService.saveAuthToken(res.authToken);
        this.props.onLoginSuccess();
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    return (
      <div className='log-in'>
        <form className='loginForm' onSubmit={this.handleSubmit}>
          <h1>Please Log In</h1>
          <label>Username:</label>
          <input type='text' name='user_name' />
          <br />
          <label>Password:</label>
          <input type='password' name='password' />
          <br />
          <Button type='submit'>Log In</Button>
        </form>
        <Link to='/'>
          <button>Cancel</button>
        </Link>
      </div>
    );
  }
}

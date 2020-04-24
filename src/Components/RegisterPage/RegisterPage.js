import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthApiService from '../../services/auth-api-service';
import { Button } from '../Utils/Utils';

export default class RegisterPage extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  };

  state = { error: null };

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { user_name, password } = ev.target;
    console.log(ev.target);
    this.setState({ error: null });

    AuthApiService.postMember({
      user_name: user_name.value,
      password: password.value
    })
      .then((res) => {
        user_name.value = '';
        password.value = '';
        this.props.onRegistrationSuccess();
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    return (
      <div className='registration'>
        <form className='registrationForm' onSubmit={this.handleSubmit}>
          <h1>Create An Account</h1>
          <label>Username:</label>
          <input type='text' name='user_name' />
          <br />
          <label>Password:</label>
          <input type='password' name='password' />
          <br />
          {/* <label>Confirm Password:</label>
          <input type='text' name='confirm-password' />
          <br /> */}
          <Button type='submit' value='Create Account'>
            Create Account
          </Button>
        </form>
        <Link to='/'>
          <button>Cancel</button>
        </Link>
      </div>
    );
  }
}

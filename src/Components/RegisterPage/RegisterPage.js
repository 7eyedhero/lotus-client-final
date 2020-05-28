import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthApiService from '../../services/auth-api-service';
import { Button } from '../Utils/Utils';
import './RegisterPage.css';

export default class RegisterPage extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  };

  state = { error: null };

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { user_name, password, confirmpassword } = ev.target;
    this.setState({ error: null });
    if (password.value !== confirmpassword.value) {
      alert('Passwords do not match.');
    } else {
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
          alert('Password must be at least 8 characters and contain one capital, one number, and a special character.');
        });
    }
  };

  render() {
    return (
      <div className='registration'>
        <form className='registrationForm' onSubmit={this.handleSubmit}>
          <h1>Create Account</h1>
          <label>Username: </label>
          <br />
          <input type='text' name='user_name' />
          <br />
          <br />
          <label>Password: </label>
          <br />
          <input type='password' name='password' />
          <br />
          <br />
          <label>Re-Type Password: </label>
          <br />
          <input type='password' name='confirmpassword' />
          <br />
          <br />
          <Button className='submitreg' type='submit' value='Create Account'>
            Create Account
          </Button>
          <Link to='/'>
            <button>Cancel</button>
          </Link>
        </form>
      </div>
    );
  }
}

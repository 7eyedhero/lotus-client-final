import React, { Component } from 'react';
import LoginPage from '../Components/LoginPage/LoginPage';
import { Section } from '../Components/Utils/Utils';
import HeaderContext from '../contexts/HeaderContext';

export default class LoginRoute extends Component {
  static contextType = HeaderContext;

  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    }
  };

  handleLoginSuccess = () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || '/lotus';
    history.push(destination);
    this.context.setLogIn();
  };

  render() {
    return (
      <Section className='LoginPage'>
        <h2>Login</h2>
        <LoginPage onLoginSuccess={this.handleLoginSuccess} />
      </Section>
    );
  }
}

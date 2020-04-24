import React, { Component } from 'react';
import { Section } from '../Components/Utils/Utils';
import RegisterPage from '../Components/RegisterPage/RegisterPage';
import HeaderContext from '../contexts/HeaderContext';

export default class RegistrationPage extends Component {
  static contextType = HeaderContext;

  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    }
  };

  handleRegistrationSuccess = () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || '/lotus';
    history.push(destination);
    this.context.setLogIn();
  };

  render() {
    return (
      <Section className='RegistrationPage'>
        <h2>Register</h2>
        <RegisterPage onRegistrationSuccess={this.handleRegistrationSuccess} />
      </Section>
    );
  }
}

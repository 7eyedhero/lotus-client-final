import React, { Component } from 'react';
import { Section } from '../Components/Utils/Utils';
import CreateCharacter from '../Components/CreateCharacter/CreateCharacter';
import HeaderContext from '../contexts/HeaderContext';

export default class CharacterRoute extends Component {
  static contextType = HeaderContext;

  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    }
  };

  handleCreationSuccess = () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || '/lotus';
    history.push(destination);
    this.context.setLogIn();
  };

  render() {
    return (
      <Section className='RegistrationPage'>
        <h2>Register</h2>
        <CreateCharacter onCreationSuccess={this.handleCreationSuccess} />
      </Section>
    );
  }
}

import React, { Component } from 'react';
import { Section } from '../Components/Utils/Utils';
import HeaderContext from '../contexts/HeaderContext';
import QuestPage from '../Components/Quests/QuestPage';

export default class QuestRoute extends Component {
  static contextType = HeaderContext;

  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    }
  };

  render() {
    return (
      <Section className='QuestPage'>
        <QuestPage />
      </Section>
    );
  }
}

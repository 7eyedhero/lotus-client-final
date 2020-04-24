import React, { Component } from 'react';
import '../Quests/QuestButton.css';
import { withRouter } from 'react-router-dom';
import CharacterContext from '../../contexts/CharacterContext';
import QuestApiService from '../../services/quest-api-service';

class QuestButton extends Component {
  static contextType = CharacterContext;
  static defaultProps = {
    quest: []
  };

  state = {
    activeQuestIndex: null
  };

  handleSetActiveQuest = (questIndex) => {
    this.setState({ activeQuestIndex: questIndex });
  };

  handleEmbark = () => {
    this.props.history.push(`/quests/${this.state.activeQuestIndex + 1}`);
    QuestApiService.getCurrentQuest(this.state.activeQuestIndex + 1)
      .then(this.context.setQuest)
      .catch(this.context.setError);
    this.context.markComplete();
  };

  renderItem(quest, idx, activeQuestIndex) {
    let questName;
    if (this.context.quest_1_result === 'failed') {
      questName = 'FAILED';
    } else if (this.context.quest_1_result === null && idx === 1) {
      questName = quest.name;
      console.log(quest);
    } else if (this.context.quest_1_result === 'success' && idx === 1) {
      questName = 'SUCCESS!';
    } else {
      questName = 'error';
    }

    return (
      <span className='Accordion__item' key={idx}>
        <button
          id='quest-button'
          type='button'
          onClick={() => {
            if (this.state.activeQuestIndex === null) {
              this.handleSetActiveQuest(idx);
            } else {
              this.handleSetActiveQuest(null);
            }
          }}
        >
          {idx + 1} {questName}
        </button>
        {activeQuestIndex === idx && (
          <p id='quest-desc'>
            {quest.desc}
            {<br />} {<br />}{' '}
            <button type='button' onClick={this.handleEmbark}>
              Embark!
            </button>
          </p>
        )}

        {<br />}
        {<br />}
      </span>
    );
  }

  render() {
    const { activeQuestIndex } = this.state;
    const { quest } = this.props;
    return (
      <div className='skill-branch'>
        <p />
        <section className='Accordion'>
          {quest.map((quest, idx) => this.renderItem(quest, idx, activeQuestIndex))}
        </section>
      </div>
    );
  }
}

export default withRouter(QuestButton);

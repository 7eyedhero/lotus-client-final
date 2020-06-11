import React, { Component } from 'react';
import '../Quests/QuestButton.css';
import { withRouter } from 'react-router-dom';
import CharacterContext from '../../contexts/CharacterContext';
import QuestApiService from '../../services/quest-api-service';

class QuestButton extends Component {
  static contextType = CharacterContext;

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
  };

  renderItem(quest, idx, activeQuestIndex) {
    //This checks to see if you have failed or completed a quest and renders the button accordinly.
    let quests = this.context.questList;
    let questName;
    if (quests[1].result === false && idx === 1) {
      questName = 'FAILED';
    } else if (quests[0].result === undefined && idx === 0) {
      questName = quest.name;
    } else if (quests[0].result === false && idx === 0) {
      questName = 'FAILED';
    } else if (quests[0].result === true && idx === 0) {
      questName = 'SUCCESS!';
    } else if (quests[1].result === undefined && idx === 1) {
      questName = quest.name;
    } else if (quests[1].result === true && idx === 1) {
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
            if (this.state.activeQuestIndex === null && quest.result === undefined) {
              this.handleSetActiveQuest(idx);
            } else if (quest.result === true || quest.result === false) {
              this.handleSetActiveQuest(null);
            } else {
              this.handleSetActiveQuest(null);
            }
          }}
        >
          {questName}
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
    const { questList } = this.context;

    return (
      <div className='branch'>
        <p />
        <section className='Accordion'>
          {questList.map((quest, idx) => this.renderItem(quest, idx, activeQuestIndex))}
        </section>
      </div>
    );
  }
}

export default withRouter(QuestButton);

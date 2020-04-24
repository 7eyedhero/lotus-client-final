import React, { Component } from 'react';
import '../Quests/QuestButton.css';
import { withRouter } from 'react-router-dom';
import '../Quests/QuestPage.css';
import TreeApiService from '../../services/tree-api-service';
import TokenService from '../../services/token-service';
import CharacterContext from '../../contexts/CharacterContext';
import QuestApiService from '../../services/quest-api-service';

class QuestPage extends Component {
  static contextType = CharacterContext;

  componentDidMount() {
    const user = TokenService.getInfoFromToken().user_id;
    const str = this.props.location.pathname;
    const str2 = str.split('/').pop();
    const page = parseInt(str2);
    console.log(page - 1);
    this.context.clearError();
    TreeApiService.getMemberChara(user).then(this.context.setCharacter).catch(this.context.setError);

    QuestApiService.getCurrentQuest(page).then(this.context.setQuest).catch(this.context.setError);
  }

  componentWillUnmount() {
    this.context.clearCharacter();
    this.context.clearQuest();
  }

  handleFight = () => {
    const { quest, character } = this.context;
    if (quest.target_def > character.attack_power || quest.target_atk > character.defense_power) {
      this.props.history.push(`/quest_result_lose`);
    } else {
      this.props.history.push('/quest_result_win');
    }
  };

  handleCowardice = () => {
    this.props.history.push('/lotus');
    this.context.clearQuest();
  };

  render() {
    const { character, quest } = this.context;
    console.log(quest);
    let battle;

    if (quest.mission_type === 'attack_mission') {
      battle = (
        <section className='battleatk'>
          <h4>Option #1 - Attack!</h4>
          <p>
            <em>You choose to attack, feeling confident in your abilities.</em>
          </p>
          <span className='run-disc'>
            <strong>Your attack power:</strong> {character.attack_power}
          </span>
          <br />
          <span className='run-disc'>
            <strong>Target defense power:</strong> {quest.target_def}
          </span>
          <br />
          <input type='button' value='Fight!' onClick={this.handleFight} />
        </section>
      );
    } else {
      battle = (
        <section className='battledef'>
          <h4>Option #1 - Defend!</h4>
          <p>
            <em>You choose to defend, feeling a sense of courage.</em>
          </p>
          <span className='run-disc'>
            <strong>Your defense power:</strong> {character.defense_power}
          </span>
          <br />
          <span className='run-disc'>
            <strong>Target attack power:</strong> {quest.target_atk}
          </span>
          <br />
          <input type='button' value='Fight!' onClick={this.handleFight} />
        </section>
      );
    }

    return (
      <div className='quest-page'>
        <h2>{quest.name}</h2>
        <section className='quest-content'>
          <p>{quest.content}</p>
          <label id='inputs'>
            <span>...What will you do?</span>
          </label>
          <br />
          {battle}
          <br />
          <br />
          <h4>Option #2 - Run!</h4>
          <p>
            <em>You choose to run, unsure of your abilities.</em>
          </p>
          <input type='button' value='Run Away!' onClick={this.handleCowardice} />
          <br />
          <span className='run-disc'>*you will return to the previous page with no effect*</span>
        </section>
      </div>
    );
  }
}

export default withRouter(QuestPage);

import React, { Component } from 'react';
import QuestApiService from '../../services/quest-api-service';
import TokenService from '../../services/token-service';
import TreeApiService from '../../services/tree-api-service';
import CharacterContext from '../../contexts/CharacterContext';
import robberhead from '../Quests/robberhead.png';
import spiderhead from '../Quests/spiderhead.png';

export default class QuestResult_win extends Component {
  static contextType = CharacterContext;

  componentDidMount() {
    const user = TokenService.getInfoFromToken().user_id;
    const str = this.props.location.pathname;
    const str2 = str.split('/').pop();
    const page = parseInt(str2);
    this.context.clearError();
    TreeApiService.getMemberChara(user).then(this.context.setCharacter).catch(this.context.setError);
    QuestApiService.getCurrentQuest(page).then(this.context.setQuest).catch(this.context.setError);
    console.log(this.context.quest);
  }

  handleHome = (e) => {
    e.preventDefault();
    const user = TokenService.getInfoFromToken().user_id;
    QuestApiService.getQuests()
      .then((q) => {
        this.context.setQuestList(q);
      })
      .catch(this.context.setError);
    console.log(this.context.quest);
    QuestApiService.postResults(user, this.context.quest.id, true).catch((res) => {
      this.setState({ error: res.error });
    });
    this.props.history.push('/lotus');
  };

  render() {
    let quest = this.context.quest;
    let img;
    if (this.context.quest.id === 1) {
      img = spiderhead;
    } else {
      img = robberhead;
    }
    return (
      <section>
        <h1>Victory! You have overcome your adversary!</h1>
        <h2>Your Rewards:</h2>
        <p>{quest.award}</p>
        <img id='img' src={img} alt='trophy for quest' />
        <br />
        <p>You gained {quest.exp_value} experience points!</p>
        <input
          type='button'
          value='Return home (returns to main page).'
          onClick={(e) => {
            this.handleHome(e);
          }}
        />
      </section>
    );
  }
}

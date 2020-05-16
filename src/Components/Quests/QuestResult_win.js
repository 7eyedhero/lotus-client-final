import React, { Component } from 'react';
import QuestApiService from '../../services/quest-api-service';
import TokenService from '../../services/token-service';
import TreeApiService from '../../services/tree-api-service';
import CharacterContext from '../../contexts/CharacterContext';
import '../Quests/robberhead.png';
import '../Quests/spiderhead.png';

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

  render() {
    let quest = this.context.quest;
    let img = quest.award_img;
    return (
      <section>
        <h1>Victory! You have overcome your adversary!</h1>
        <h2>Your Rewards:</h2>
        <p>{quest.award}</p>
        <img id='img' src={require(img)} alt='trophy for quest' />
        <input
          type='button'
          value='Return home (returns to main page).'
          onClick={() => {
            this.props.history.push('/lotus');
          }}
        />
      </section>
    );
  }
}

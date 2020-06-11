import React, { Component } from 'react';
import QuestApiService from '../../services/quest-api-service';
import TokenService from '../../services/token-service';
import TreeApiService from '../../services/tree-api-service';
import CharacterContext from '../../contexts/CharacterContext';

export default class QuestResult_lose extends Component {
  static contextType = CharacterContext;

  componentDidMount() {
    //This makes sure the quest result is in-line with the award.
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
    QuestApiService.postResults(this.context.quest.id, user, false).catch((res) => {
      this.setState({ error: res.error });
    });
    this.props.history.push('/lotus');
  };

  render() {
    return (
      <section>
        <h1>Oh no! You weren't strong enough to defeat your adversary!</h1>
        <p>Humbled, you decide to go spend some time with yourself to recouperate...</p>
        <input
          type='button'
          value='Return home'
          onClick={(e) => {
            this.handleHome(e);
          }}
        />
      </section>
    );
  }
}

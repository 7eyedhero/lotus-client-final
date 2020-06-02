import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TreeApiService from '../../services/tree-api-service';
import { Section } from '../Utils/Utils';
import CharacterContext from '../../contexts/CharacterContext';
import TokenService from '../../services/token-service';
import Moment from 'moment';
import '../DisplayCharacter/DisplayCharacter.css';
import '../DisplayCharacter/ok.jpg';
import Stats from '../DisplayCharacter/Stats';
import QuestButton from '../Quests/QuestButton';
import QuestApiService from '../../services/quest-api-service';
import robberhead from '../DisplayCharacter/robberhead.png';
import spiderhead from '../DisplayCharacter/spiderhead.png';

class DisplayCharacter extends Component {
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
  };

  static contextType = CharacterContext;

  componentDidMount() {
    const user = TokenService.getInfoFromToken().user_id;

    this.context.clearError();
    TreeApiService.getMemberChara(user).then(this.context.setCharacter).catch(this.context.setError);
    console.log(this.context.setCharacter);

    QuestApiService.getQuests().then(this.context.setQuestList).catch(this.context.setError);
  }

  componentWillUnmount() {
    this.context.clearCharacter();
    this.context.clearQuest();
  }

  renderCharacter() {
    const { character } = this.context;
    const { questList } = this.context;
    Moment.locale('en');
    const dt = character.date_created;
    let quest1 = questList[0];
    let quest2 = questList[1];
    console.log(questList, this.context.questList, this.quest1, this.quest2);
    let award = null;
    let pic;

    if (questList !== []) {
      if (quest1.id) {
        award = spiderhead;
      } else if (quest2.id) {
        award = robberhead;
      } else {
        award = null;
      }
    } else {
      award = null;
    }

    if (award === null) {
      pic = null;
    } else {
      pic = <img className='award' src={award} alt='This is your award for completing a quest!' />;
    }

    return (
      <section id='main-interface'>
        <section id='chara-info'>
          <div id='placeholder'>
            <img id='img' src={require('./ok.jpg')} alt='i tried' />
          </div>
          <br />
          <div id='chara-stats'>
            <span>
              <strong>Name: </strong>
              <em>{character.name}</em>
            </span>
            <br />
            <br />
            <span>
              <strong>Gender:</strong> <em>{character.gender}</em>
            </span>
            <br />
            <br />
            <span>
              <strong>Class:</strong> <em>{character.class}</em>
            </span>
            <br />
            <br />
            <span>
              <strong>Kingdom:</strong> <em>{character.kingdom}</em>
            </span>
            <br />
            <br />
            <span>
              <strong>Birthday:</strong> <em>{Moment(dt).format('DD MMM YYYY')}</em>
            </span>
            <br />
          </div>
        </section>
        <div className='inventory'>{pic}</div>
        <div className='quests'>
          <h2>Quests</h2>
          <p id='disclaimer'>*Quests will be updated periodically*</p>
          <QuestButton quest={questList} />
        </div>
      </section>
    );
  }

  render() {
    const { error, character } = this.context;

    let content;
    if (error) {
      content =
        error.error === `character doesn't exist` ? (
          <section>
            <p>Oops! Looks like you don't have one yet, so click the button below to start your journey!</p>
            <Link to={'createcharacter'} onCreationSuccess={this.handleCreationSuccess}>
              <input type='button' value='Create Character' />
            </Link>
          </section>
        ) : (
          <p className='red'>There was an error{console.log(error)}</p>
        );
    } else {
      content = this.renderCharacter();
    }
    return (
      <Section className='characterPage'>
        <h1>Your Character</h1>
        {content} <Stats character={character} />
      </Section>
    );
  }
}

export default DisplayCharacter;

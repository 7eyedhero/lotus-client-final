import React, { Component } from 'react';

const CharacterContext = React.createContext({
  character: [],
  quest: {},
  questList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setCharacter: () => {},
  clearCharacter: () => {},
  setQuest: () => {},
  clearQuest: () => {}
});

export default CharacterContext;

export class CharacterProvider extends Component {
  state = {
    character: [],
    quest: {},
    questList: [],
    error: null
  };

  setError = (error) => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  setCharacter = (character) => {
    this.setState({ character });
  };

  clearCharacter = () => {
    this.setCharacter([]);
  };

  setQuest = (quest) => {
    this.setState({ quest });
  };

  setQuestList = (questList) => {
    this.setState({ questList });
  };

  clearQuest = () => {
    this.setQuest([]);
  };

  render() {
    const value = {
      character: this.state.character,
      quest: this.state.quest,
      questList: this.state.questList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setCharacter: this.setCharacter,
      clearCharacter: this.clearCharacter,
      setQuest: this.setQuest,
      setQuestList: this.setQuestList,
      clearQuest: this.clearQuest
    };
    return <CharacterContext.Provider value={value}>{this.props.children}</CharacterContext.Provider>;
  }
}

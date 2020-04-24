import React, { Component } from 'react';

const CharacterContext = React.createContext({
  character: [],
  quest: [],
  quest_1_result: null,
  quest_2_result: null,
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
    quest: [],
    quest_1_result: null,
    quest_2_result: null,
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

  clearQuest = () => {
    this.setQuest([]);
  };

  render() {
    const value = {
      character: this.state.character,
      quest: this.state.quest,
      quest_1_result: this.state.quest_1_result,
      quest_2_result: this.state.quest_2_result,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setCharacter: this.setCharacter,
      clearCharacter: this.clearCharacter,
      setQuest: this.setQuest,
      clearQuest: this.clearQuest
    };
    return <CharacterContext.Provider value={value}>{this.props.children}</CharacterContext.Provider>;
  }
}

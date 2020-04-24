import React, { Component } from 'react';

class Stats extends Component {
  static defaultProps = {
    stats: []
  };

  state = {
    activeQuestIndex: null
  };

  handleSetActiveQuest = (questIndex) => {
    this.setState({ activeQuestIndex: questIndex });
  };

  render() {
    return (
      <section>
        {/* <button
          id='stats'
          type='button'
          onClick={() => {
            if (this.state.activeQuestIndex === null) {
              this.handleSetActiveQuest(idx);
            } else {
              this.handleSetActiveQuest(null);
            }
          }}
        >
          {quest.title}
        </button>
        {activeQuestIndex === idx && (
          <p id='quest-desc'>
            {quest.content}"
            {<br />} {<br />}{' '}
            <button type='button' onClick={this.handleEmbark}>
              Embark!
            </button>
          </p>
        )} */}
      </section>
    );
  }
}

export default Stats;

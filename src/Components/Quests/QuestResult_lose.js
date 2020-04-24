import React, { Component } from 'react';

export default class QuestResult_lose extends Component {
  render() {
    return (
      <section>
        <h1>Oh no! You weren't strong enough to defeat your adversary!</h1>
        <p>Humbled, you decide to go spend some time with yourself to recouperate...</p>
        <input
          type='button'
          value='Think about your poor decision (returns to main page).'
          onClick={() => {
            this.props.history.push('/lotus');
          }}
        />
      </section>
    );
  }
}

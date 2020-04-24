import React, { Component } from 'react';
import DisplayCharacter from '../DisplayCharacter/DisplayCharacter';
import '../Tree/Tree.css';

class Tree extends Component {
  render() {
    return (
      <div className='main-interface'>
        <DisplayCharacter />
      </div>
    );
  }
}

export default Tree;

import React, { Component } from 'react';
import TreeApiService from '../../services/tree-api-service';

export default class CreateCharacter extends Component {
  static defaultProps = {
    onCreationSuccess: () => {}
  };

  state = { error: null };

  handleSubmit = (ev) => {
    ev.preventDefault();
    this.setState({ error: null });
    const { name, gender, character_class, kingdom } = ev.target;

    console.log(ev.target);

    TreeApiService.postCharacter(name.value, gender.value, character_class.value, kingdom.value)
      .then(() => {
        name.value = '';
        this.props.onCreationSuccess();
        console.log('Success');
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    return (
      <div>
        <h1>Create Your Character!</h1>
        <form className='character-creation-form' onSubmit={this.handleSubmit}>
          <label>Name: </label>
          <input type='text' name='name' />
          <br />
          <br />
          <label>Gender: </label>
          <select name='gender'>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
            <option value='Other'>Other</option>
          </select>
          <br />
          <br />
          <label>Class: </label>
          <select name='character_class'>
            <option value='Knight'>Knight</option>
            <option value='Paladin'>Paladin</option>
          </select>
          <br />
          <br />
          <label>Kingdom: </label>
          <select name='kingdom'>
            <option value='Ignis'>Ignis</option>
            <option value='Oceani'>Oceani</option>
            <option value='Ventus'>Ventus</option>
            <option value='Terra'>Terra</option>
          </select>
          <br />
          <br />
          <input type='submit' value='Create Character!' />
          <br />
        </form>
      </div>
    );
  }
}

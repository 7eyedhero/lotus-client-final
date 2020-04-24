import TokenService from './token-service';
import config from '../config';

const TreeApiService = {
  getCharacter() {
    return fetch(`${config.API_ENDPOINT}/characters`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then((res) => (!res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()));
  },
  getMemberChara(user) {
    return fetch(`${config.API_ENDPOINT}/characters/${user}`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then((res) => (!res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()));
  },

  postCharacter(name, gender, character_class, kingdom) {
    return fetch(`${config.API_ENDPOINT}/characters`, {
      method: 'POST',
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        name,
        gender,
        character_class,
        kingdom
      })
    }).then((res) => (!res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()));
  }
};

export default TreeApiService;

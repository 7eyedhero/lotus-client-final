import config from '../config';

const AuthApiService = {
  postLogin(credentials) {
    return fetch(`${config.API_ENDPOINT}/auth/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(credentials)
    }).then((res) => (!res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()));
  },
  postMember(member) {
    return fetch(`${config.API_ENDPOINT}/members`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(member)
    }).then((res) => (!res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()));
  },
  postCharacter(character) {
    return fetch(`${config.API_ENDPOINT}/characters`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(character)
    }).then((res) => (!res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()));
  }
};

export default AuthApiService;

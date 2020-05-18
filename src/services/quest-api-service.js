import TokenService from './token-service';
import config from '../config';

const QuestApiService = {
  getQuests() {
    return fetch(`${config.API_ENDPOINT}/quests`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then((res) => (!res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()));
  },
  getCurrentQuest(questId) {
    return fetch(`${config.API_ENDPOINT}/quests/${questId}`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then((res) => (!res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()));
  },
  postResults(quest_id, member_id, quest_result) {
    return fetch(`${config.API_ENDPOINT}/quests`, {
      method: 'POST',
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        quest_id,
        member_id,
        quest_result
      })
    }).then((res) => (!res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()));
  }
};
export default QuestApiService;

import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import PrivateRoute from '../Utils/PrivateRoute';
import PublicRoute from '../Utils/PublicRoute';
import LandingPage from '../LandingPage/LandingPage';
import RegisterRoute from '../../routes/RegisterRoute';
import LoginRoute from '../../routes/LoginRoute';
import TreeRoute from '../../routes/TreeRoute';
import NotFoundPage from '../../routes/NotFoundPage';
import CharacterRoute from '../../routes/CharacterRoute';
import QuestRoute from '../../routes/QuestRoute';
import QuestResult_lose from '../Quests/QuestResult_lose';
import QuestResult_win from '../Quests/QuestResult_win';

class App extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <Header />
        </header>
        <main className='App__main'>
          <Switch>
            <PublicRoute exact path={'/'} component={LandingPage} />
            <PublicRoute path={'/createaccount'} component={RegisterRoute} />
            <PublicRoute path={'/login'} component={LoginRoute} />
            <PrivateRoute path={'/lotus'} component={TreeRoute} />
            <PrivateRoute path={'/createcharacter'} component={CharacterRoute} />
            <PrivateRoute path={'/quests'} component={QuestRoute} />
            <PrivateRoute path={'/quest_result_win'} component={QuestResult_win} />
            <PrivateRoute path={'/quest_result_lose'} component={QuestResult_lose} />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;

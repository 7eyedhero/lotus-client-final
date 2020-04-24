import React, { Component } from 'react';

const HeaderContext = React.createContext({
  loggedIn: false,
  error: null,
  setError: () => {},
  clearError: () => {},
  setLogIn: () => {}
});
export default HeaderContext;

export class HeaderProvider extends Component {
  state = {
    loggedIn: false,
    error: null
  };

  setLogIn = () => {
    this.setState({ loggedIn: true });
  };

  resetLogIn = () => {
    this.setState({ loggedIn: false });
  };

  setError = (error) => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  render() {
    const value = {
      articleList: this.state.articleList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setLogIn: this.setLogIn,
      resetLogIn: this.resetLogIn
    };
    return <HeaderContext.Provider value={value}>{this.props.children}</HeaderContext.Provider>;
  }
}

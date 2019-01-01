import React from 'react';
import LoginScreen from './screens/LoginScreen';

export default class App extends React.Component {
  state = {
    login: false,
  };

  login = () => {
    this.setState({
      login: true
    });
  };

  render() {
    return (
      <LoginScreen
        onPress={this.login}
      />
    );
  }
}

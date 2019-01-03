import React from 'react';
import {
  Button,
  StyleSheet,
  View
} from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  companies = () => {
    this.props.navigation.navigate('Companies');
  };

  persons = () => {

  };

  render() {
    return (
      <View>
        <Button
          title='Are you a Company?'
          onPress={this.companies}
        >
        </Button>
        <Button
          title='Are you a Pesrson?'
          onPress={this.persons}
        >
        </Button>
      </View>
    );
  }

}

const styles = StyleSheet.create({

});

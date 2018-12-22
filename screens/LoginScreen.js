import React from 'react';
import {
  Button,
  StyleSheet,
  Alert,
  View
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#555',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

    login = async () => {
      try {
        const {
        type,
        token
      } = await Expo.Facebook.logInWithReadPermissionsAsync('2178541529074662');
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        // const response = await fetch(`https://graph.facebook.com/me?field=id,name,picture&access_token=${token}`);
        // Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
        this.props.onPress();
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }

  render() {
    return (
      <View>
      <Ionicons name="md-checkmark-circle" size={100} color="#008080" />
      <Button 
        title='Login with FB'
        onPress={this.login}
      >
        
      </Button>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  
});

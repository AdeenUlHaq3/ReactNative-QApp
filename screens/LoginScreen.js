import React from 'react';
import {
  StyleSheet,
  View,
  ImageBackground
} from 'react-native';
import { Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import firebase from '../config/Firebase';
import logo from '../assets/images/logo.png';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  saveLoginUserData = (userData) => {
    console.log(userData);
    
    // const {
    //   id,
    //   name,
    //   picture
    // } = userData;

    // firebase.database().ref(`Users/${id}`)
    // .set({
    //   id,
    //   name,
    //   picture
    // })
    // .then(() => this.props.navigation.navigate('Home'));
  }

  login = async () => {
    try {
      const {
        type,
        token
      } = await Expo.Facebook.logInWithReadPermissionsAsync('2178541529074662', {
        permissions: ['public_profile', 'email'],
      });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(`https://graph.facebook.com/me?fields=id,name,picture.type(large),email,about&access_token=${token}`);
        
        const credential = firebase.auth.FacebookAuthProvider.credential(token);
        firebase.auth().signInAndRetrieveDataWithCredential(credential)
          .then(() => response.json())
          .then(res => this.saveLoginUserData(res))
          .catch(error => console.log(error))
      }
      else { }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground source={logo} style={{width: '100%', height: '100%', justifyContent: "flex-end"}}>
          <Button
            iconLeft
            full
            style={{ height: 70, backgroundColor: '#fff' }}
            onPress={this.login}
          >
            <Icon name='facebook' style={{ fontSize: 50, color: '#000' }} />
          </Button>
          </ImageBackground>
      </View>
    );
  }

}

const styles = StyleSheet.create({

});
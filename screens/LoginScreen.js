import React from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Text
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import firebase from '../config/Firebase';
import logo from '../assets/images/slider/1.png';
import SwipeView from 'react-native-swipeview';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  saveLoginUserData = (userData) => {
    console.log(userData);

    const {
      id,
      name,
      picture
    } = userData;

    firebase.database().ref(`Users/${id}`)
      .set({
        id,
        name,
        picture
      })
      .then(() => this.props.navigation.navigate('Home'));
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
        <ImageBackground source={logo} style={{ width: '100%', height: '100%', justifyContent: "flex-end" }}>
          <SwipeView
            renderVisibleContent={() => <Icon style={styles.icon} name='facebook' />}
            swipeToOpenPercent={100}
            onSwipedLeft={this.login}
            previewSwipeDemo={true}
            disableSwipeToRight={true}
            swipeDuration={100}
          />
        </ImageBackground>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  icon: {
    backgroundColor: 'whitesmoke',
    padding: 15,
    color: '#06f',
    textAlign: 'center',
    color: '#3C5A99',
    fontSize: 50
  }
});
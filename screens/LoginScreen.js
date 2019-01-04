import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Alert
} from 'react-native';
import { Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import firebase from '../config/Firebase';

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
        token,
        expires,
        permissions,
        declinedPermissions,
      } = await Expo.Facebook.logInWithReadPermissionsAsync('2178541529074662', {
        permissions: ['public_profile'],
      });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(`https://graph.facebook.com/me?field=id,name,picture&access_token=${token}`);
        
        const credential = firebase.auth.FacebookAuthProvider.credential(token);
        firebase.auth().signInAndRetrieveDataWithCredential(credential)
        .then(() => {
          console.log('t');
          
          this.saveLoginUserData(response.json());
        })
        .catch(error => console.log(error)) 
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        {/* <ListRow
          title='Swipe able'
          swipeActions={[
            <ListRow.SwipeActionButton title='Cancel' />,
            <ListRow.SwipeActionButton title='Remove' type='danger' onPress={() => alert('Remove')} />,
          ]}
        /> */}
        <View style={{ flex: 1, backgroundColor: '#000' }}>
          <Button
            iconLeft
            full
            style={{ height: '100%', backgroundColor: '#000' }}
            onPress={this.login}
          >
            <Icon name='facebook' style={{ fontSize: 100, color: '#F0FFF0' }} />
          </Button>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({

});
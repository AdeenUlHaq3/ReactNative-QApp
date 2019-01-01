import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import { Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import firebase from '../config/Firebase';

export default class LoginScreen extends React.Component {
  
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
        // const response = await fetch(`https://graph.facebook.com/me?field=id,name,picture&access_token=${token}`);
        // Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
        const credential = firebase.auth.FacebookAuthProvider.credential(token);
        firebase.auth().signInAndRetrieveDataWithCredential(credential)
        .then(() => this.props.onPress())
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
        <View style={{ backgroundColor: '#F0FFF0', flex: 1 }}>
          <Text style={{ textAlign: 'center', fontSize: 30, color: '#BA55D3' }}>L{"\n"}O{"\n"}G{"\n"}I{"\n"}N</Text>
        </View>
        {/* <ListRow
          title='Swipe able'
          swipeActions={[
            <ListRow.SwipeActionButton title='Cancel' />,
            <ListRow.SwipeActionButton title='Remove' type='danger' onPress={() => alert('Remove')} />,
          ]}
        /> */}
        <View style={{ flex: 4, backgroundColor: '#000' }}>
          <Button
            iconLeft
            full
            style={{ height: '100%', backgroundColor: '#BA55D3' }}
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
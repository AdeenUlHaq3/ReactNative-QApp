import React from 'react';
import {
  Button,
  StyleSheet,
  View,
  Text
} from 'react-native';
// import { ListRow } from 'teaset';

export default class LoginScreen extends React.Component {

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
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{ backgroundColor: '#ccc', flexDirection: 'column', flex: 0.2 }}></View>
        {/* <ListRow
          title='Swipe able'
          swipeActions={[
            <ListRow.SwipeActionButton title='Cancel' />,
            <ListRow.SwipeActionButton title='Remove' type='danger' onPress={() => alert('Remove')} />,
          ]}
        /> */}
        <View style={{ flex: 0.8, flexDirection: 'column' }}>
          <View style={{ backgroundColor: '#333', flexDirection: 'row', flex: 0.25 }}>
            <Text>Logo</Text>
          </View>
          <View style={{ backgroundColor: '#123', flexDirection: 'row', flex: 0.25 }}>
            <Button
              title='Login with FB'
              onPress={this.login}
              style={{ flex: 1, flexDirection: 'row' }}
            >
            </Button>
          </View>
          <View style={{ backgroundColor: '#345', flexDirection: 'row', flex: 0.25 }}>
            <Text>App Details</Text>
          </View>
          <View style={{ backgroundColor: '#166', flexDirection: 'row', flex: 0.25 }}>
            <Text>EXIT</Text>
          </View>
        </View>
      </View>

    );
  }

}

const styles = StyleSheet.create({

});
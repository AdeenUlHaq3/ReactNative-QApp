import React from 'react';
import {
  Button,
  StyleSheet,
  View
} from 'react-native';
import { ListRow } from 'teaset';

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
      <View>
        {/* <Button
          title='Login with FB'
          onPress={this.login}
        >
        </Button> */}
        <ListRow
          title='Swipe able'
          swipeActions={[
            <ListRow.SwipeActionButton title='Cancel' />,
            <ListRow.SwipeActionButton title='Remove' type='danger' onPress={() => alert('Remove')} />,
          ]}
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({

});

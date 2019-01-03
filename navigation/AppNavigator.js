import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import CompaniesScreen from '../screens/CompaniesScreen';

const AppNavigator = createStackNavigator({
  Login: LoginScreen,
  Home: HomeScreen,
  Companies: CompaniesScreen,
});

export default AppNavigator;

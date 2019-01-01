import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import CompaniesScreen from '../screens/CompaniesScreen';

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Companies: CompaniesScreen,
});

export default AppNavigator;

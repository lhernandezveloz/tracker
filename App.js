import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailsScreen from './src/screens/TrackDetailsScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import {Provider as AuthProvider} from './src/context/authContext';
import {setNavigator} from './src/navigationRef';
import InitialScreen from './src/screens/InitialScreen';

const switchNavigator = createSwitchNavigator({
  InitialAuth: InitialScreen,
  loginFlow : createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow: createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetails: TrackDetailsScreen
    }),
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen
  })

});
const App = createAppContainer(switchNavigator);

export default ()=>{
  return (
    <AuthProvider>
      <App ref={(navigator) => { setNavigator(navigator)}}/>
    </AuthProvider>
  );
  
};
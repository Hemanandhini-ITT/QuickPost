import React from 'react';
import '@react-native-firebase/app';
import {NavigationContainer} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import RootNavigator from './src/navigation/RootNavigator';

const App = () => (
  <NavigationContainer>
    <RootNavigator />
    <Toast />
  </NavigationContainer>
);

export default App;

import React from 'react';
import PostDetails from '../components/PostDetails';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeStackParamList} from './navigation.types';
import HomeTabs from './HomeTabNavigator';

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="HomeTabs" component={HomeTabs} />
    <Stack.Screen name="PostDetails" component={PostDetails} />
  </Stack.Navigator>
);

export default HomeNavigator;

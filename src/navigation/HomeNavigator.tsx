import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feed from '../components/Feed';
import { HomeStackParamList, HomeTabParamList } from './navigation.types';
import Profile from '../components/Profile';
import CreatePost from '../components/CreatePost';

const Stack = createNativeStackNavigator<HomeStackParamList>();
const Tab = createBottomTabNavigator<HomeTabParamList>();

const HomeTabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="Feed" component={Feed} />
    <Tab.Screen name="Profile" component={Profile} />
    <Tab.Screen name="CreatePost" component={CreatePost} />
  </Tab.Navigator>
);

const HomeNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="HomeTabs" component={HomeTabs} />
  </Stack.Navigator>
);

export default HomeNavigator;

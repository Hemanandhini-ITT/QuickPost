import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feed from '../components/Feed';
import {HomeStackParamList, HomeTabParamList} from './navigation.types';
import Profile from '../components/Profile';
import CreatePost from '../components/CreatePost';
import PostDetails from '../components/PostDetails';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Stack = createNativeStackNavigator<HomeStackParamList>();
const Tab = createBottomTabNavigator<HomeTabParamList>();

const createTabIcon = (iconName: string) =>
  ({color, size}: {color: string; size: number}) => (
    <MaterialIcons name={iconName} color={color} size={size} />
  );

const FeedIcon = createTabIcon('list');
const CreatePostIcon = createTabIcon('post-add');
const ProfileIcon = createTabIcon('account-circle');

const HomeTabs = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Feed"
      component={Feed}
      options={{
        tabBarIcon: FeedIcon,
      }}
    />
    <Tab.Screen
      name="CreatePost"
      component={CreatePost}
      options={{
        tabBarIcon: CreatePostIcon,
      }}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarIcon: ProfileIcon,
      }}
    />
  </Tab.Navigator>
);

const HomeNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="HomeTabs" component={HomeTabs} />
    <Stack.Screen name="PostDetails" component={PostDetails} />
  </Stack.Navigator>
);

export default HomeNavigator;

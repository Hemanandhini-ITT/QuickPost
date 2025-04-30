import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feed from '../components/Feed';
import CreatePost from '../components/CreatePost';
import Profile from '../components/Profile';
import {HomeTabParamList} from './navigation.types';

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
      options={{tabBarIcon: FeedIcon}}
    />
    <Tab.Screen
      name="CreatePost"
      component={CreatePost}
      options={{tabBarIcon: CreatePostIcon}}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{tabBarIcon: ProfileIcon}}
    />
  </Tab.Navigator>
);

export default HomeTabs;

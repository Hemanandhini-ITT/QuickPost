import React from 'react';
import {Button} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from '../../components/Profile';
import {useLogout} from '../../hooks/useLogout';
import Feed from '../../components/Feed';
import CreatePost from '../../components/CreatePost';

const Tab = createBottomTabNavigator();

const HeaderRight = ({handleLogout}: {handleLogout: () => void}) => (
  <Button title="Logout" onPress={handleLogout} color="#d11a2a" />
);

const HomeScreen = () => {
  const {handleLogout} = useLogout();
  const screenOptions = {
    headerRight: () => <HeaderRight handleLogout={handleLogout} />,
  };

  return (
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={Profile} options={screenOptions} />
      <Tab.Screen name="Feed" component={Feed} options={screenOptions} />
      <Tab.Screen
        name="New Post"
        component={CreatePost}
        options={screenOptions}
      />
    </Tab.Navigator>
  );
};

export default HomeScreen;

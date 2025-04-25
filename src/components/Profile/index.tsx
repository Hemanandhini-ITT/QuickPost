import React from 'react';
import { View, Text, Button } from 'react-native';
import { useLogout } from '../../hooks/useLogout';

const ProfilePage = () => {
  const { handleLogout } = useLogout();

  return (
    <View>
      <Text>Your Profile</Text>
      <Button title="Logout" onPress={handleLogout} color="#d11a2a" />
    </View>
  );
};

export default ProfilePage;

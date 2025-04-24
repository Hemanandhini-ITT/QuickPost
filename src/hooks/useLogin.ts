import {useState} from 'react';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {signIn} from '../services/firebaseAuth';
import {RootStackParamList} from '../../app.types';

export const useLogin = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await signIn(email, password);
      navigation.navigate('Home');
    } catch (error) {
      Alert.alert('Login Error', (error as Error).message);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
  };
};

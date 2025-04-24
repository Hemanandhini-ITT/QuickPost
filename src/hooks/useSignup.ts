import {useState} from 'react';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {signUp} from '../services/firebaseAuth';
import {RootStackParamList} from '../../app.types';

export const useSignup = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      await signUp(email, password);
      navigation.navigate('Home');
    } catch (error) {
      Alert.alert('Signup Error', (error as Error).message);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    handleSignup,
  };
};

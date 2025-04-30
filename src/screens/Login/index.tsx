import React, {useRef, useState} from 'react';
import {View, TextInput, TouchableOpacity, Text, Pressable} from 'react-native';
import styles from './login.styles';
import {useLogin} from '../../hooks/useLogin';
import {useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../../navigation/navigation.types';
import { validateEmail } from '../../utils/validateEmail';

const LoginScreen: React.FC = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const {handleLogin, error} = useLogin();
  const [localError, setLocalError] = useState<string | null>(null);
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  const onLoginPress = () => {
    const email = emailRef.current.trim();
    const password = passwordRef.current;
    if (!email || !password) {
      setLocalError('Ensure all fields are completed to continue');
      return;
    }
    if (!validateEmail(email)) {
      setLocalError('Invalid email format. Please check your email.');
      return;
    }
    setLocalError(null);
    handleLogin(email, password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello there!</Text>
      <Text style={styles.subtitle}>Welcome Back</Text>

      {(localError || error) && (
        <Text style={styles.errorText}>{localError ?? error}</Text>
      )}

      <TextInput
        placeholder="Email Address"
        style={styles.input}
        onChangeText={text => (emailRef.current = text)}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        onChangeText={text => (passwordRef.current = text)}
        secureTextEntry
      />

      <Pressable style={styles.button} onPress={onLoginPress}>
        <Text style={styles.buttonText}>Sign In</Text>
      </Pressable>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.registerLink}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

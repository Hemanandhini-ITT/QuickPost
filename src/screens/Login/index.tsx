import React, {useRef} from 'react';
import {View, TextInput, TouchableOpacity, Text, Pressable} from 'react-native';
import styles from './login.styles';
import {useLogin} from '../../hooks/useLogin';
import {useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../../navigation/navigation.types';

const LoginScreen: React.FC = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const {handleLogin, error} = useLogin();
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello there!</Text>
      <Text style={styles.subtitle}>Welcome Back</Text>

      {error && <Text style={styles.errorText}>{error}</Text>}

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

      <Pressable
        style={styles.button}
        onPress={() => handleLogin(emailRef.current, passwordRef.current)}>
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

import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './login.styles';
import { useLogin} from '../../hooks/useLogin';
import {useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../../navigation/navigation.types';
import TextInputField from '../../components/TextInputField';

const LoginScreen: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  const {
    control,
    errors,
    handleSubmit,
    onSubmit,
    error,
  } = useLogin();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello there!</Text>
      <Text style={styles.subtitle}>Welcome Back</Text>

      {error && <Text style={styles.errorText}>{error}</Text>}

      <TextInputField
        name="email"
        label="Email Address"
        control={control}
        errors={errors}
        keyboardType="email-address"
        autoCapitalize="none"
        placeholder="john@gmail.com"
        style={styles.input}
      />

      <TextInputField
        name="password"
        label="Password"
        control={control}
        errors={errors}
        secureTextEntry
        style={styles.input}
        placeholder="John@123"
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

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

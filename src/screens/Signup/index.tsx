import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './signup.styles';
import {useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../../navigation/navigation.types';
import TextInputField from '../../components/TextInputField';
import { useSignup } from '../../hooks/useSignup';

const SignupScreen: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
  const {control, errors, handleSubmit, onSubmit, error} = useSignup();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Get Started</Text>
      <Text style={styles.subtitle}>Create a new account</Text>

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
      <TextInputField
        name="confirmPassword"
        label="Confirm Password"
        control={control}
        errors={errors}
        secureTextEntry
        style={styles.input}
        placeholder="John@123"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.loginLink}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignupScreen;

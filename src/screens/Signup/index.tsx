import React, { useRef, useState } from 'react';
import {
  View,
  TextInput,
  Text,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import { useSignup } from '../../hooks/useSignup';
import styles from './signup.styles';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation/navigation.types';

const SignupScreen: React.FC = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const confirmPasswordRef = useRef('');
  const [localError, setLocalError] = useState<string | null>(null);
  const { handleSignup, error } = useSignup();
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  const onSignupPress = () => {
    const email = emailRef.current.trim();
    const password = passwordRef.current;
    const confirmPassword = confirmPasswordRef.current;

    if (password !== confirmPassword) {
      setLocalError('Passwords do not match');
      return;
    }

    setLocalError(null); // clear mismatch error
    handleSignup(email, password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Get Started</Text>
      <Text style={styles.subtitle}>Create a new account</Text>

      {(localError || error) && (
        <Text style={styles.errorText}>{localError || error}</Text>
      )}

      <TextInput
        placeholder="Email Address"
        style={styles.input}
        onChangeText={(text) => (emailRef.current = text)}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        onChangeText={(text) => (passwordRef.current = text)}
        secureTextEntry
      />
      <TextInput
        placeholder="Confirm Password"
        style={styles.input}
        onChangeText={(text) => (confirmPasswordRef.current = text)}
        secureTextEntry
      />

      <Pressable style={styles.button} onPress={onSignupPress}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </Pressable>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginLink}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignupScreen;

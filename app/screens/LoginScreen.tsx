

import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import CustomButton from '../components/CustomButton';
import InputField from '../components/InputField';
import ErrorText from '../components/ErrorText';

const LoginScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      setError('All fields are required');
      return;
    }
    // Add API call for registration
    setError('');
    router.push('/dashboard');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login </Text>

      <InputField
        placeholder="Enter your email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        iconName="email-outline"
      />

      <InputField
        placeholder="Enter your password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        iconName="lock-outline"
      />

      {error ? <ErrorText message={error} /> : null}

      <CustomButton title="Log In" onPress={handleLogin} />

      <TouchableOpacity onPress={() => router.push('/screens/SignupScreen')}>
        <Text style={styles.switchText}>Don't have an account? Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  switchText: {
    marginTop: 20,
    textAlign: 'center',
    color: '#4CAF50',
  },
});

export default LoginScreen;
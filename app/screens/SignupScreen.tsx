
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import CustomButton from '../components/CustomButton';
import InputField from '../components/InputField';
import ErrorText from '../components/ErrorText';

const SignUpScreen = () => {
  const router = useRouter();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = () => {
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setError('All fields are required');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    // Add API call for registration
    setError('');
    router.push('/dashboard');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>

      <View style={styles.rowContainer}>
        <InputField
          placeholder="First Name"
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
          iconName="account-outline"
          style={styles.halfWidth}
        />
        <InputField
          placeholder="Last Name"
          value={lastName}
          onChangeText={(text) => setLastName(text)}
          iconName="account-outline"
          style={styles.halfWidth}
        />
      </View>

      <InputField
        placeholder="Email Address"
        value={email}
        onChangeText={(text) => setEmail(text)}
        iconName="email-outline"
      />

      <InputField
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        iconName="lock-outline"
      />

      <InputField
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
        secureTextEntry
        iconName="lock-outline"
      />

      {error ? <ErrorText message={error} /> : null}

      <CustomButton title="Sign Up" onPress={handleSignUp} />

      <Text style={styles.orText}>OR</Text>

      <TouchableOpacity style={styles.socialButton}>
        <Icon name="google" size={20} color="white" />
        <Text style={styles.socialButtonText}>Continue with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/screens/LoginScreen')}>
        <Text style={styles.switchText}>Already have an account? Log in</Text>
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
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  halfWidth: {
    flex: 0.48,
  },
  orText: {
    textAlign: 'center',
    marginVertical: 10,
    color: '#888',
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4285F4',
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
  },
  socialButtonText: {
    marginLeft: 10,
    color: 'white',
    fontWeight: 'bold',
  },
  switchText: {
    marginTop: 20,
    textAlign: 'center',
    color: '#4CAF50',
  },
});

export default SignUpScreen;
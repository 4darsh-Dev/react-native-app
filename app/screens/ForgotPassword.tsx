import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handlePasswordReset = () => {
    if (!email) {
      setError('Please enter your email');
      return;
    }
    setError('');
    setMessage('If this email is registered, you will receive a password reset link.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.instructions}>Enter your email to reset your password</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      {message ? <Text style={styles.messageText}>{message}</Text> : null}
      <Button title="Send Reset Link" onPress={handlePasswordReset} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  instructions: {
    marginBottom: 16,
    fontSize: 16,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginVertical: 8,
  },
  errorText: {
    color: 'red',
    marginBottom: 8,
  },
  messageText: {
    color: 'green',
    marginBottom: 8,
  },
});
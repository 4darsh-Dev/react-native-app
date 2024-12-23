import React from 'react';
import { Text, StyleSheet } from 'react-native';

const ErrorText = ({ message }) => {
  return <Text style={styles.errorText}>{message}</Text>;
};

const styles = StyleSheet.create({
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default ErrorText;
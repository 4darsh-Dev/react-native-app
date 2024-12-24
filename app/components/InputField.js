import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';

const InputField = ({ placeholder, value, onChangeText, secureTextEntry, iconName }) => {
  return (
    <View style={styles.inputContainer}>
      <Icon name={iconName} size={20} color="gray" />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    marginLeft: 10,
  },
});

export default InputField;
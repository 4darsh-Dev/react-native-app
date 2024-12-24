import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';

const Dashboard = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to the Dashboard!</Text>
        {/* need to add the logout logic here as well */}
      <TouchableOpacity style={styles.button} onPress={() => router.push('/screens/OnboardingScreen')}>
        <Icon name="logout" size={20} color="white" />
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF5722',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    marginLeft: 10,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Dashboard;
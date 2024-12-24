// onboarding.tsx
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

export default function Onboarding() {
  const router = useRouter();

  return (
    <View style={styles.container}>
        <Image source={require('../../assets/images/splash-screen-image.jpg')} style={styles.image} />
      <Text style={styles.title}>Let's Grow & Plant Trees Together!</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/screens/LoginScreen')}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonSecondary}
        onPress={() => router.push('/screens/SignupScreen')}>
        <Text style={styles.buttonSecondaryTxt}>Sign Up</Text>
      </TouchableOpacity>
      <View style={styles.madeBox}>
      <Text style={styles.madeText}>Made with by ❤️ Solve-Ease</Text>
      </View>   
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: '80%',
    height: 300,
    borderRadius: 8,
    marginBottom: 16,
    backgroundSize : 'contain',
  },
  title: {
    fontSize: 21,
    fontWeight: 'bold',
    marginBottom: 20,
    paddingLeft : 6,
    paddingRight : 6,

  },
  buttonBox : {
    flex: 1,
    flexDirection : "row",

  },
  button: {
    backgroundColor: '#1A73E8',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 10,
  },
  buttonSecondary: {
    backgroundColor: '#f5f5f5',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  buttonSecondaryTxt : {
    color : "black",
    fontSize: 16,
    fontWeight: '600',
  },
  madeBox : {
    width : "100%",
    height : 64,
    position : 'absolute',
    bottom : 6,
  },
  madeText : {
    color : "black",
    fontSize : 18,
    fontWeight : 600,
    textAlign: 'center',

  }
});

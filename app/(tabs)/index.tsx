import {Text, View, StyleSheet, StatusBar } from "react-native";
import SplashScreen from "../screens/SplashScreen";
import {Link, useRouter } from "expo-router";
import React, { useState, useEffect } from "react";
import LoginScreen from "../screens/LoginScreen";
// import { StatusBar } from "expo-status-bar";

const Index = ()=>{

    // Pre loader functioning:
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
        setLoading(false);
        router.push('/screens/LoginScreen'); 
        }, 3000); 

        return () => clearTimeout(timer); // Cleanup the timer
    }, []);

    return(

        <View style= {styles.container} >
        <StatusBar barStyle="light-content" backgroundColor="#fff" />
        {loading ? <SplashScreen /> : (
            // Your main content goes here
            < LoginScreen />
        )}
        </View>

    );
}


const styles = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent : 'center',
      alignItems : 'center',
  
    },
  
  })



export default Index;


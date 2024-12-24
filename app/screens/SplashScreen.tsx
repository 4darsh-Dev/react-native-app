import {Text, View, StyleSheet }  from "react-native"


const SplashScreen = ()=>{
    return(
        <View style= {styles.container}>
            <Text style={styles.text}>
                Welcome to App!
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : "#ECE852",


    },
    text : {
        fontSize : 16,
        
    }
})

export default SplashScreen;
import {Text, View, StyleSheet }  from "react-native"


const LoginScreen = ()=>{
    return(
        <View style= {styles.container}>
            <Text style={styles.text}>
                Click here to login! 
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : "#fff",


    },
    text : {
        fontSize : 16,
        
    }
})

export default LoginScreen;
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableOpacity} from 'react-native';
import * as Google from 'expo-google-app-auth';

class LoginScreen extends Component {
    signInWithGoogle = async () => {
        try {
          const result = await Google.logInAsync({
            //androidClientId: YOUR_CLIENT_ID_HERE,
            iosClientId: '1060838451853-fefsee3spo46qliaeas4k90r60k59lip.apps.googleusercontent.com',
            scopes: ['profile', 'email'],
          });
      
          if (result.type === 'success') {
            return result.accessToken;
          } else {
            return { cancelled: true };
          }
        } catch (e) {
          return { error: true };
        }
      }
    render() {
        return (
            <View style={styles.container}>
                <View style = {styles.logoContainer}>
                    <Image style={styles.logo} source={require('../images/logo.png')} />
                    <Text style={styles.title}>Track Your Path to Fitness!</Text>
                </View>
                    <TouchableOpacity style={styles.signIn} onPress={this.signInWithGoogle}>
                        <Text style={styles.buttonText}>Sign in With Google</Text>
                    </TouchableOpacity>
            </View>
        )
    }
}
export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0e6ac7'
    },
    signIn: {
        backgroundColor: '#2980b9',
        paddingVertical: 15,
        marginBottom: 30,
        borderRadius: 20,
        marginLeft: 10,
        marginRight: 10
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
        marginTop: 60
    },
    logo: {
        width: 250,
        height: 150, 
    },
    title: {
        color: '#ffffff',
        marginTop: 10,
        textAlign: 'center',
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
    }
});
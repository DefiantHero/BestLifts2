import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
//import { Header } from 'react-native-elements';
import firebase from 'firebase';



class DashboardScreen extends Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>Welcome to BestLifts!</Text>
                </View>
                <TouchableOpacity style={styles.workOut} onPress={() => this.props.navigation.navigate('ChestScreen')}>
                    <Text style={styles.workOutText}>Chest</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.workOut} onPress={() => this.props.navigation.navigate('BackScreen')}>
                    <Text style={styles.workOutText}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.workOut} onPress={() => this.props.navigation.navigate('ShoulderScreen')}> 
                    <Text style={styles.workOutText}>Shoulders And Traps</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.workOut} onPress={() => this.props.navigation.navigate('LegsScreen')}>
                    <Text style={styles.workOutText}>Legs</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.signOut} onPress={() => firebase.auth().signOut()}>
                    <Text style={styles.buttonText}>Sign Out</Text>
                </TouchableOpacity>
            </View>
        )
    }
}




export default DashboardScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#0e6ac7'
    },
    titleContainer: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 50,
    },
    titleText: {
        fontSize: 35,
    },
    signOut: {
        backgroundColor: '#2980b9',
        paddingVertical: 15,
        marginBottom: 20,
        borderRadius: 20,
        marginLeft: 10,
        marginRight: 10
    },
    buttonText: {
        color: '#FFFFFF',
        textAlign: 'center',
    },
    workOut: {
        backgroundColor: '#2980b9',
        paddingVertical: 15,
        marginBottom: 20,
        borderRadius: 20,
        marginLeft: 10,
        marginRight: 10
    },
    workOutText: {
        textAlign: 'center',
    }
});
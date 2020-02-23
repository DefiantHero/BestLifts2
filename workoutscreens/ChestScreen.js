import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

class Chest extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Text>BenchPress BOI LETS GET IT</Text>
            </View>
        )
    }
}

export default Chest;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
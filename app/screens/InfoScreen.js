import React from 'react';
import {View, Text, StyleSheet } from 'react-native';

class InfoScreen extends React.Component {
    render () {
        return (
            <View style={styles.greenContainer}>
                <Text style={styles.body}>
                    InfoScreen Test
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    greenContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#80a11d'
    },
    body: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: 40,
        paddingRight: 40,
        paddingBottom: 50,
        textAlign: 'center'
    }
});

export default InfoScreen;
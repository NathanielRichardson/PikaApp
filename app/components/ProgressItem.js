import React from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';

export default class ProgressItem extends React.Component {
    render () {
        return (
            <View style={styles.spacingItem}>
                <View style={styles.progressItem}>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    progressItem: {
        width: '95%',
        height: 100,
        backgroundColor: '#FFF',
        padding: 40,
        borderColor: '#A9A9A9',
        borderWidth: 3
    },
    spacingItem: {
        width:'99%',
        height: 120,
        backgroundColor:'#80a11d',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
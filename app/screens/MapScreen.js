import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

class MapScreen extends React.Component {
    render() {
        return (
            <View style={styles.greenContainer}>
                <Image source={require('../app/img/pikaMap.png')} style={{height: '95%', width: '95%'}}/>
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
    }
});

export default MapScreen;
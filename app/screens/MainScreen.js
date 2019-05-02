import React from 'react';
import {View, TouchableOpacity, StyleSheet } from 'react-native';
import MenuItem from '../components/MenuItems';

class MainScreen extends React.Component {
    onPressMap = () => {
        this.props.navigation.navigate('Map');
    }
    onPressProgress = () => {
        this.props.navigation.navigate('Progress');
    }
    onPressInfo = () => {
        this.props.navigation.navigate('Info');
    }
    onPressFacts = () => {
        this.props.navigation.navigate('FunFacts');
    }
    render() {
        return (
            <View style={styles.greenContainer}>
                <View style={styles.menuContainer}>
                    <TouchableOpacity
                        onPress={this.onPressMap}
                        style={styles.button}
                    >
                        <MenuItem itemImage={require ('./app/img/mapIcon.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.onPressProgress}
                        style={styles.button}
                    >
                        <MenuItem itemImage={require ('./app/img/progressIcon.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.onPressInfo}
                        style={styles.button}
                    >
                        <MenuItem itemImage={require ('./app/img/infoIcon.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.onPressFacts}
                        style={styles.button}
                    >
                        <MenuItem itemImage={require ('./app/img/funFactsIcon.png')}/>
                    </TouchableOpacity>
                </View>
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
    menuContainer: {
        height: '40%',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    button: {
        width: '50%',
        height: '50%',
    },
});

export default MainScreen;
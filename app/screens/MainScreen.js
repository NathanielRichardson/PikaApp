import React from "react";
import {Image, StyleSheet, TouchableOpacity, View} from "react-native";
import MenuItem from 'app/components/MenuItems';

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
                        <MenuItem itemImage={require ('app/img/mapIcon.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.onPressProgress}
                        style={styles.button}
                    >
                        <MenuItem itemImage={require ('app/img/progressIcon.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.onPressInfo}
                        style={styles.button}
                    >
                        <MenuItem itemImage={require ('app/img/infoIcon.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.onPressFacts}
                        style={styles.button}
                    >
                        <MenuItem itemImage={require ('app/img/funFactsIcon.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    greenContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#80a11d'
    },
    top: {
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -300,
    },
    secondTop: {
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -200
    },
    header: {
        color: '#fff',
        fontSize: 28,
        borderColor: '#fff',
        borderWidth: 2,
        padding: 20,
        paddingLeft: 20,
        paddingRight: 20,
    },
    input: {
        height:40,
        width:200,
        borderColor:'grey',
        borderWidth: 1,
        backgroundColor:'#FFFFFF'
    },
    body: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: 40,
        paddingRight: 40,
        paddingBottom: 50,
        textAlign: 'center'
    },
    menuContainer: {
        height: '40%',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    menuItem: {
        width: '100%',
        height:'100%',
        padding: 10,
        borderColor: '#000',
        paddingBottom: 40,
    },
    button: {
        width: '50%',
        height: '50%',
    },
    progressContainer: {
        flex: 1,
        flexDirection: 'column',
        width: '100%',
        height: '100%',
    }
});

export default MainScreen;
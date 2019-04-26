// Basic imports
import React from 'react';
import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { createAppContainer, createStackNavigator, } from 'react-navigation'; //Imports for the navigation
import MenuItem from './app/components/MenuItems';
import ProgressItem from './app/components/ProgressItem';

// HomeScreen code
class HomeScreen extends React.Component {
    // Sets the state for the text (We'll get that later from the TextInput)
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        };
    }
    render() {
        return (
            // First of the view styles (styles listed below)
            <View style={styles.greenContainer}>
                <View style={styles.top}>
                    <Image source={require('./app/img/townLogo.png')}/>
                    <Text style={styles.header}>
                        P i k a s   i n   t h e   P a r k !
                    </Text>
                </View>
                <TextInput
                    style={styles.input}
                    placeholder=" Your name here"
                    onChangeText={(text) => this.setState({text})} // Get's what the user typed
                />
                <Button
                    color={"#FFF"}
                    title="Go"
                    onPress={() => {
                        this.props.navigation.navigate('Welcome', {
                            firstName: this.state.text,
                        }); // Navigates to the next screen and send the parameter of first page
                    }}
                />
            </View>
        );
    }
}

// Code for the second screen
class WelcomeScreen extends React.Component {
    render() {
        const { navigation } = this.props;
        const firstName = navigation.getParam('firstName'); //Gathering the first name from the home screen
        return (
            <View style={styles.greenContainer}>
                <View style={styles.secondTop}>
                    <Text style={styles.header}>Welcome {JSON.stringify(firstName)}</Text>
                </View>
                <Text style={styles.body}>
                    It's time to find some pikas! This scavenger hunt will give you clues as to where to find the hidden pikas around town.
                    Once you find the pika, click the button! When you find all of the pikas, you can go to the Visitor Center to claim your prize!
                    Click the go button to start your adventure!
                </Text>
                <Button
                    title="Go"
                    color={"#fff"}
                    onPress={() => {
                        this.props.navigation.navigate('Main');
                    }}
                />
            </View>
        );
    }
}

// Code for the third screen
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

class MapScreen extends React.Component {
    render() {
        return (
            <View style={styles.greenContainer}>
                <Image source={require('./app/img/pikaMap.png')} style={{height: '95%', width: '95%'}}/>
            </View>
        );
    }
}

class ProgressScreen extends React.Component {
    render() {
        return (
            <ScrollView style={styles.progressContainer}>
                <ProgressItem/>
                <ProgressItem/>
                <ProgressItem/>
                <ProgressItem/>
                <ProgressItem/>
                <ProgressItem/>
                <ProgressItem/>
                <ProgressItem/>
                <ProgressItem/>
                <ProgressItem/>
            </ScrollView>
        );
    }
}

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

class FunFactsScreen extends React.Component {
    render () {
        return (
            <View style={styles.greenContainer}>
                <Text style={styles.body}>
                    FunFactScreen Test
                </Text>
            </View>
        );
    }
}

const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,
    },
    Welcome: {
        screen: WelcomeScreen,
    },
    Main: {
        screen: MainScreen,
    },
    Map: {
        screen: MapScreen,
    },
    Progress: {
        screen: ProgressScreen,
    },
    Info: {
        screen: InfoScreen,
    },
    FunFacts: {
        screen: FunFactsScreen
    },
}, {
    initialRouteName: 'Home',
});

// This is where you can put all of your styles
// This makes it easier to use the same styles for things and to declutter code
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

//Awful color that the town uses #857C2F

export default createAppContainer(AppNavigator);
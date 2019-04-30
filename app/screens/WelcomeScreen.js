import React from "react";
import {Button, StyleSheet, Text, View} from "react-native";

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

export default WelcomeScreen;
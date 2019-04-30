import React from 'react';
import { View, Text, Button, TextInput, StyleSheet, Image } from 'react-native';

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
                    <Image source={require('app/img/townLogo.png')}/>
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

export default HomeScreen;
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ProgressItem from '../components/ProgressItem';

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

const styles = StyleSheet.create({
    progressContainer: {
        flex: 1,
        flexDirection: 'column',
        width: '100%',
        height: '100%',
    }
});

export default ProgressScreen;
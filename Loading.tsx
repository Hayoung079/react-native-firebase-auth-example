import React, { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import auth from '@react-native-firebase/auth';

const Loading = ({ navigation }: any): React.ReactElement => {
    useEffect(() => {
        auth().onAuthStateChanged( user => {
            navigation.navigate( user ? 'Main' : 'Auth')
        } )
    },[])

    return (
        <View style={styles.container}>
            <Text>Loading</Text>
            <ActivityIndicator size='large' />
        </View>
    )
}

export default Loading; 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
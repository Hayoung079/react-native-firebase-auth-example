import React, { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import  auth  from '@react-native-firebase/auth';


export const Loading = ({ navigation }) => {
    useEffect(() => {
        auth().onAuthStateChanged(user => {
            user ? navigation.navigate('Main', {userEmail : user.email} ) : navigation.navigate('Auth')
        })
    }, [])

    return (
        <View style={styels.container}>
            <Text>Loading</Text>
            <ActivityIndicator size='large' />
        </View>
    )
}

const styels = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
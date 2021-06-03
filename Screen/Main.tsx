import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import auth from '@react-native-firebase/auth';

export const Main = ({ route, navigation }) => {
    const { userEmail } = route.params;

    const handleLogout = () => {
        auth().signOut()
        .then(() => {
            navigation.navigate('Loading')
            console.log('User signed out!')
        })
        .catch(error => console.error(error));
    }

    return(
        <View style={styles.container}>
            <Text>Hi {userEmail}! </Text>
            <View style={styles.separator} />
            <Button title='로그아웃' onPress={handleLogout} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    }
})
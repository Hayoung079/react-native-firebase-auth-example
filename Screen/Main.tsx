import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Main = ({ route }) => {
    const { userEmail } = route.params;

    return(
        <View style={styles.container}>
            <Text>Hi {userEmail}! </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
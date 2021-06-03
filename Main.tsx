import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import auth from '@react-native-firebase/auth';

const Main = ({ navigation }: any ): React.ReactElement => {
    const [currentUser, setCurrentUser] = React.useState(null);

    useEffect(() => {
        const authuser = auth();
        console.log(authuser)
    }, [])

    return ( 
        <View style={styles.container}>
            <Text>
                Hi!
            </Text>
        </View>
    )
}

export default Main;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
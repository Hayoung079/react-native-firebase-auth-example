import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import auth from '@react-native-firebase/auth';

const SignIn = ({ navigation }: any ): React.ReactElement => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ errorMessage, setErrorMessage ] = useState('');

    const handleLogin = () => {
        auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            console.log(`로그인 결과: ${result}`)
            navigation.navigate('Main')
        })
        .catch(error => setErrorMessage(error.message))
    }

    return (
        <View style={styles.container}>
            <Text>로그인</Text>
            {errorMessage ? <Text style={{color: 'red'}}>{errorMessage}</Text> : null }
            <TextInput
                style={styles.textInput}
                autoCapitalize="none"
                placeholder="이메일을 입력하세요."
                onChangeText={email => setEmail(email)}
                value={email}
            />
            <TextInput
                secureTextEntry
                style={styles.textInput}
                autoCapitalize="none"
                placeholder="비밀번호를 입력하세요."
                onChangeText={password => setPassword(password)}
                value={password}
            />
            <View style={styles.separator} />
            <Button title="로그인" onPress={handleLogin} />
            <View style={styles.separator} />
            <Button
                title="계정이 없나요? 회원가입하기"
                onPress={() => navigation.navigate('SignUp')}
            />
        </View>
    )
}   

export default SignIn

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        height: 40,
        width: '90%',
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 8
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
})
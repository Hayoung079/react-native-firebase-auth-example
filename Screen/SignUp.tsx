import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import auth from '@react-native-firebase/auth';

const SignUp = ({ navigation }): React.ReactElement => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ errorMessage, setErrorMessage ] = useState('');

    // submit
    const handleSignUp = () => {
        auth().createUserWithEmailAndPassword(email, password)
        .then(() => navigation.navigate('SignIn'))
        .catch(error => setErrorMessage(error.message))
    }

    return ( 
        <View style={styles.container}>
            <Text>회원가입</Text>
            {errorMessage ? <Text style={{color: 'red'}}>{errorMessage}</Text> : null }
            {/* form */}
            <TextInput
                placeholder="이메일을 입력하세요."
                autoCapitalize="none"
                style={styles.textInput}
                onChangeText={email => setEmail(email)}
                value={email}
            />
            <TextInput
                secureTextEntry
                placeholder="비밀번호를 입력하세요."
                autoCapitalize="none"
                style={styles.textInput}
                onChangeText={password => setPassword(password)}
                value={password}
            />
            <View style={styles.separator} />
            <Button title="가입하기" onPress={handleSignUp} />
            <View style={styles.separator} />
            <Button
                title="이미 계정이 있나요? 로그인하기"
                onPress={() => navigation.navigate('SignIn')}
            />
        </View>
    )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
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
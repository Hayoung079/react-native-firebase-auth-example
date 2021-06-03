import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import auth from '@react-native-firebase/auth';

type Inputs = {
    email: string,
    password: string,
};

const SignUp = ({ navigation }): React.ReactElement => {
    // 인증 오류 메시지
    const [ errorMessage, setErrorMessage ] = useState('');
    
    // form
    const { control, handleSubmit, formState: { errors } } = useForm<Inputs>();

    // submit
    const onSubmit: SubmitHandler<Inputs> = data => {
        auth().createUserWithEmailAndPassword(data.email, data.password)
        .then(() => navigation.navigate('Login'))
        .catch(error => {
            if(error.code === 'auth/email-already-in-use') {
                console.log('이메일이 이미 사용중입니다.')
                setErrorMessage('이메일이 이미 사용중입니다.')
            }else if (error.code === 'auth/invalid-email') {
                console.log('유효하지 않은 이메일입니다.')
                setErrorMessage('유효하지 않은 이메일입니다.')
            }
            console.error(error)
            
        })
    };

    return ( 
        <View style={styles.container}>
            <Text>회원가입</Text>
            
            {/* 인증 오류 메시지 */}
            { errorMessage &&
                <Text style={{ color: 'red' }}>
                    { errorMessage }
                </Text>
            }

            {/* form */}
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                    placeholder='이메일을 입력해주세요'
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={value => onChange(value)}
                    value={value}
                />
                )}
                name="email"
                rules={{ required: true }}
                defaultValue=""
            />
            {errors.email && <Text>이메일은 필수 입력 사항입니다.</Text>}

            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                    placeholder='비밀번호를 입력해주세요'
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={value => onChange(value)}
                    value={value}
                    />
                    )}
                    name="password"
                    defaultValue=""
            />
            {errors.password && <Text>비밀번호는 필수 입력 사항입니다.</Text>}
            
            <View style={styles.separator} />
            <Button 
                title='가입하기' 
                onPress={handleSubmit(onSubmit)} 
            />
            <View style={styles.separator} />
            <Button
                title="이미 계정이 있나요? 로그인하기"
                onPress={() => navigation.navigate('Login')}
            />
        </View>
    )
}

export default SignUp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
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
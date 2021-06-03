import React, { useState } from 'react';
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import auth from '@react-native-firebase/auth';

type Inputs = {
    email: string,
    password: string,
};

const Login = ({ navigation }: any ): React.ReactElement => {
    // 인증 오류 메시지
    const [ errorMessage, setErrorMessage ] = useState('');

    // form
    const { control, handleSubmit, formState: { errors } } = useForm<Inputs>();
    
    // submit
    const onSubmit: SubmitHandler<Inputs> = data => {
        auth().signInWithEmailAndPassword(data.email, data.password)
        .then(() => navigation.navigate('Main'))
        .catch((error) => setErrorMessage(error.message))
    };

    return (
        <View style={styles.container}>
            <Text>로그인</Text>

            {/* 인증 오류 메세지 */}
            { errorMessage &&
                <Text style={{ color: 'red' }}>
                    { errorMessage}
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
                title='로그인' 
                onPress={handleSubmit(onSubmit)} 
            />
            <View style={styles.separator} />
            <Button
                title="계정이 없나요? 회원가입하기"
                onPress={() => navigation.navigate('SignUp')}
            />
        </View>
    )
}   

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
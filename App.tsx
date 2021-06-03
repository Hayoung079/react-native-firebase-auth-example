import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Loading} from './Screen/Loading';
import SignUp from './Screen/SignUp';
import SignIn from './Screen/SignIn';
import {Main} from './Screen/Main';

const Stack = createStackNavigator();

const AuthScreen = (): React.ReactElement => {
  return (
    <Stack.Navigator initialRouteName='SignIn' >
        <Stack.Screen name='SignIn' component={SignIn} />
        <Stack.Screen name='SignUp' component={SignUp} />
    </Stack.Navigator>
  )
}

const App = (): React.ReactElement => {  
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Loading' >
        <Stack.Screen name='Loading' component={Loading} />
        <Stack.Screen name='Auth' component={AuthScreen} options={{headerShown: false}} />
        <Stack.Screen name='Main' component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
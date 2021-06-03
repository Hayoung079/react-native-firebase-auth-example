import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Loading from './Loading';
import SignUp from './SignUp';
import Login from './Login';
import Main from './Main';

const Stack = createStackNavigator();

const AuthScreen = (): React.ReactElement => {
  return (
    <Stack.Navigator initialRouteName='Login' >
        <Stack.Screen name='Login' component={Login} />
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

export default App; 
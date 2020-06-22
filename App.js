import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './src/Main';
import Weather from './src/Weather';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main" screenOptions={{ header: () => null }}>
        <Stack.Screen name="Main" initialParams={{version : 1}}>
          {props => <Main {...props}/>}
        </Stack.Screen>
        <Stack.Screen name="Weather">
          {props => <Weather {...props} index={1}/>}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;
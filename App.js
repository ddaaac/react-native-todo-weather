import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Weather from './src/Weather';
import Main from './src/Main';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Todo') {
              iconName = 'format-list-bulleted';
            } else if (route.name === 'Weather') {
              iconName = 'weather-cloudy';
            }
            return <MaterialCommunityIcons name={iconName} size={size} color={color}/>;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Todo" initialParams={{ version: 1 }}>
          {props => <Main {...props}/>}
        </Tab.Screen>
        <Tab.Screen name="Weather">
          {props => <Weather {...props} index={1}/>}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  )
};

export default App;
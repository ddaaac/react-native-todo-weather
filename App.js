import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {RecoilRoot} from 'recoil';

import Weather from './src/Weather';
import Main from './src/Main';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            // eslint-disable-next-line react/prop-types,react/display-name
            tabBarIcon: ({focused, color, size}) => {
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
          <Tab.Screen name="Todo" initialParams={{version: 1}}>
            {props => <Main {...props}/>}
          </Tab.Screen>
          <Tab.Screen name="Weather">
            {props => <Weather {...props}/>}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
};

export default App;

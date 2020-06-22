import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Todo from './Todo';
import Detail from './Detail';

const Stack = createStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator initialRouteName="TodoMain" screenOptions={{ header: () => null }}>
      <Stack.Screen name="TodoMain" component={Todo}/>
      <Stack.Screen name="Detail" component={Detail} initialParams={{ content: '' }}/>
    </Stack.Navigator>
  );
};

export default Main;
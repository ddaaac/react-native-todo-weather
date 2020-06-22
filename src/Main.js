import React from 'react';
import TodoHeader from './Header';
import TodoList from './TodoList';
import TodoInput from './TodoInput';
import TodoFooter from './TodoFooter';
import { View } from 'react-native';
import { styles } from './css';

const Main = () => {
  return (
    <View style={styles.container}>
      <TodoHeader/>
      <TodoInput/>
      <TodoList/>
      <TodoFooter/>
    </View>
  )
};

export default Main;
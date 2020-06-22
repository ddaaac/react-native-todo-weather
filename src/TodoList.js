import React from 'react';
import { View } from 'react-native';
import { styles } from './css';
import TodoItem from './TodoItem';

const TodoList = () => {
  return (
    <View style={styles.todoContainer}>
      <View style={styles.todoList}>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
      </View>
    </View>
  )
};

export default TodoList;
import React from 'react';
import { View } from 'react-native';

import { styles } from './css';
import TodoCounter from './TodoCounter';
import TodoFilters from './TodoFilters';
import TodoNextPage from './TodoNextPage';

const TodoFooter = () => {
  return (
    <View style={{
      ...styles.todoFooter,
      ...styles.todoContainer,
    }}>
      <TodoCounter/>
      <TodoFilters/>
      <TodoNextPage/>
    </View>
  );
};

export default TodoFooter;

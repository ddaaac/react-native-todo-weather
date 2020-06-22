import React from 'react';
import { View } from 'react-native';
import { styles } from './css';
import TodoCounter from './TodoCounter';
import TodoFilters from './TodoFilters';

const TodoFooter = ({ itemsCount }) => {
  return (
    <View style={{
      ...styles.todoFooter,
      ...styles.todoContainer,
    }}>
      <TodoCounter count={itemsCount}/>
      <TodoFilters/>
    </View>
  );
};

export default TodoFooter;

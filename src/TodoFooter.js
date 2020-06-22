import React from 'react';
import { View } from 'react-native';
import { styles } from './css';
import TodoCounter from './TodoCounter';
import TodoFilters from './TodoFilters';

const TodoFooter = ({ itemsCount, changeTodoFilter, todoFilter }) => {
  return (
    <View style={{
      ...styles.todoFooter,
      ...styles.todoContainer,
    }}>
      <TodoCounter count={itemsCount}/>
      <TodoFilters
        changeTodoFilter={changeTodoFilter}
        todoFilter={todoFilter}
      />
    </View>
  );
};

export default TodoFooter;

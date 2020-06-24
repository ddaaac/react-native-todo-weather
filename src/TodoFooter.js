import React from 'react';
import { View } from 'react-native';

import { styles } from './css';
import TodoCounter from './TodoCounter';
import TodoFilters from './TodoFilters';
import TodoNextPage from './TodoNextPage';

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
      <TodoNextPage/>
    </View>
  );
};

export default TodoFooter;

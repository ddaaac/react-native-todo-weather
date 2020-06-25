import React from 'react';
import {View} from 'react-native';

import styles from './css';
import TodoCounter from './TodoCounter';
import TodoFilters from './TodoFilters';

const TodoFooter = () => (
  <View style={{
    ...styles.todoFooter,
    ...styles.todoContainer,
  }}>
    <TodoCounter/>
    <TodoFilters/>
  </View>
);

export default TodoFooter;

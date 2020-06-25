import React from 'react';
import {View} from 'react-native';

import styles from './css';
import TODO_FILTER from './Filters';
import TodoFilter from './TodoFilter';

const TodoFilters = () => (
  <View style={styles.filterContainer}>
    <TodoFilter filter={TODO_FILTER.SHOW_ALL}/>
    <TodoFilter filter={TODO_FILTER.SHOW_TODO}/>
    <TodoFilter filter={TODO_FILTER.SHOW_DONE}/>
  </View>
);

export default TodoFilters;

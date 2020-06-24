import React from 'react';
import { View } from 'react-native';

import { styles } from './css';
import TodoFilter from './TodoFilter';
import { TODO_FILTER } from './Filters';

const TodoFilters = () => {
  return (
    <View style={styles.filterContainer}>
      <TodoFilter filter={TODO_FILTER.SHOW_ALL}>전체보기</TodoFilter>
      <TodoFilter filter={TODO_FILTER.SHOW_TODO}>해야할 일</TodoFilter>
      <TodoFilter filter={TODO_FILTER.SHOW_DONE}>완료한 일</TodoFilter>
    </View>
  )
};

export default TodoFilters;
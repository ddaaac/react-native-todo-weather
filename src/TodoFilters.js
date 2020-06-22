import React from 'react';
import { styles } from './css';
import { View } from 'react-native';
import TodoFilter from './TodoFilter';
import { TODO_FILTER } from './Filters';

const TodoFilters = ({ changeTodoFilter, todoFilter }) => {
  return (
    <View style={styles.filterContainer}>
      <TodoFilter onPress={() => changeTodoFilter(TODO_FILTER.SHOW_ALL)}
                  isSelected={todoFilter === TODO_FILTER.SHOW_ALL}>전체보기</TodoFilter>
      <TodoFilter onPress={() => changeTodoFilter(TODO_FILTER.SHOW_TODO)}
                  isSelected={todoFilter === TODO_FILTER.SHOW_TODO}>해야할 일</TodoFilter>
      <TodoFilter onPress={() => changeTodoFilter(TODO_FILTER.SHOW_DONE)}
                  isSelected={todoFilter === TODO_FILTER.SHOW_DONE}>완료한 일</TodoFilter>
    </View>
  )
};

export default TodoFilters;
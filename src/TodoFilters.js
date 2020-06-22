import React from 'react';
import { styles } from './css';
import { View } from 'react-native';
import TodoFilter from './TodoFilter';

const TodoFilters = () => {
  return (
    <View style={styles.filterContainer}>
      <TodoFilter isSelected={true}>전체보기</TodoFilter>
      <TodoFilter isSelected={false}>해야할 일</TodoFilter>
      <TodoFilter isSelected={false}>완료한 일</TodoFilter>
    </View>
  )
};

export default TodoFilters;
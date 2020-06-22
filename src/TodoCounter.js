import React from 'react';
import { Text } from 'react-native';
import { styles } from './css';

const TodoCounter = () => {
  const count = 5;
  return (
    <Text style={styles.todoCounter}>
      총 {count}개
    </Text>
  )
};

export default TodoCounter;
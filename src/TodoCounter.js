import React from 'react';
import { Text } from 'react-native';

import { styles } from './css';

const TodoCounter = ({ count }) => {
  return (
    <Text style={styles.todoCounter}>
      총 {count}개
    </Text>
  )
};

export default TodoCounter;
import React from 'react';
import {Text} from 'react-native';
import {useRecoilValue} from 'recoil';

import styles from './css';
import {filteredTodoItemsCountState} from './GlobalState';

const TodoCounter = () => {
  const todoItemsCount = useRecoilValue(filteredTodoItemsCountState);

  return (
    <Text style={styles.todoCounter}>
      총 {todoItemsCount}개
    </Text>
  );
};

export default TodoCounter;

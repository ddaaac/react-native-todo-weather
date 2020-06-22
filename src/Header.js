import React from 'react';
import { Text } from 'react-native';
import { styles } from './css';

const TodoHeader = ({ version }) => {
  return (
    <Text style={styles.headerTitle}>Todo App{version}</Text>
  )
};

export default TodoHeader;
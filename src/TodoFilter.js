import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './css';

const TodoFilter = ({ onPress, isSelected, children }) => {
  const filterStyle = isSelected ?
    {
      ...styles.filterItem,
      ...styles.filterSelected,
    } :
    styles.filterItem;

  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={filterStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default TodoFilter;
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './css';

const TodoFilter = ({ isSelected, children }) => {
  const filterStyle = isSelected ?
    {
      ...styles.filterItem,
      ...styles.filterSelected,
    } :
    styles.filterItem;

  return (
    <TouchableOpacity>
      <Text style={filterStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default TodoFilter;
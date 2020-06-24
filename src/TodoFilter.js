import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useRecoilState } from 'recoil';

import { styles } from './css';
import { todoFilterState } from './GlobalState';

const TodoFilter = ({ filter, children }) => {
  const [todoFilter, setTodoFilter] = useRecoilState(todoFilterState);

  const filterStyle = (filter === todoFilter) ?
    {
      ...styles.filterItem,
      ...styles.filterSelected,
    } :
    styles.filterItem;

  return (
    <TouchableOpacity onPress={() => setTodoFilter(filter)}>
      <Text style={filterStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default TodoFilter;
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useRecoilState} from 'recoil';
import PropTypes from 'prop-types';

import styles from './css';
import {todoFilterState} from './GlobalState';

const TodoFilter = ({filter}) => {
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
        {filter.name}
      </Text>
    </TouchableOpacity>
  );
};

TodoFilter.propTypes = {
  filter: PropTypes.shape({
    apply: PropTypes.func,
    name: PropTypes.string,
  }),
};

export default TodoFilter;

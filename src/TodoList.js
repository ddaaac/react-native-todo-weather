import React, { useRef, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { useRecoilValue } from 'recoil';

import { styles } from './css';
import TodoItem from './TodoItem';
import { filteredTodoItemsState } from './GlobalState';

const TodoList = ({ pushToDetail }) => {
  const flatRef = useRef(null);
  const todoItems = useRecoilValue(filteredTodoItemsState);

  useEffect(() => {
    if (flatRef.current) {
      console.log(flatRef.current.scrollToEnd);
    }
  }, [flatRef]);

  return (
    <View style={{
      ...styles.todoBody,
      ...styles.todoContainer
    }}>
      <FlatList
        ref={flatRef}
        style={styles.todoList}
        data={todoItems}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) =>
          <TodoItem
            item={item}
            pushToDetail={pushToDetail}
          />}
      >
      </FlatList>
    </View>
  )
};

export default TodoList;
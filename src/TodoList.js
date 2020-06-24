import React, { useRef, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { useRecoilValue, useRecoilState } from 'recoil';

import { styles } from './css';
import TodoItem from './TodoItem';
import { filteredTodoItemsState, todoItemAddedState } from './GlobalState';

const TodoList = ({ pushToDetail }) => {
  const flatRef = useRef(null);
  const todoItems = useRecoilValue(filteredTodoItemsState);
  const [isTodoItemAdded, setIsTodoItemAdded] = useRecoilState(todoItemAddedState);

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
        onContentSizeChange={() => {
          if (!isTodoItemAdded) {
            return;
          }
          flatRef.current.scrollToEnd();
          setIsTodoItemAdded(false);
        }}
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
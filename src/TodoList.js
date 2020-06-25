import React, {useRef} from 'react';
import {View, FlatList} from 'react-native';
import {useRecoilValue, useRecoilState} from 'recoil';
import PropTypes from 'prop-types';

import styles from './css';
import {filteredTodoItemsState, todoItemAddedState} from './GlobalState';
import TodoItem from './TodoItem';

const TodoList = ({pushToDetail}) => {
  const flatRef = useRef(null);
  const todoItems = useRecoilValue(filteredTodoItemsState);
  const [isTodoItemAdded, setIsTodoItemAdded] = useRecoilState(todoItemAddedState);

  const scrollToEndIfItemAdded = () => {
    if (!isTodoItemAdded) {
      return;
    }
    flatRef.current.scrollToEnd();
    setIsTodoItemAdded(false);
  };

  return (
    <View style={{
      ...styles.todoBody,
      ...styles.todoContainer,
    }}>
      <FlatList
        ref={flatRef}
        style={styles.todoList}
        data={todoItems}
        keyExtractor={item => item.id.toString()}
        onContentSizeChange={scrollToEndIfItemAdded}
        renderItem={({item}) =>
          <TodoItem
            item={item}
            pushToDetail={pushToDetail}
          />}
      >
      </FlatList>
    </View>
  );
};

TodoList.propTypes = {
  pushToDetail: PropTypes.func,
};

export default TodoList;

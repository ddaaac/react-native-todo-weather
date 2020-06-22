import React from 'react';
import { View } from 'react-native';
import { styles } from './css';
import TodoItem from './TodoItem';

const TodoList = ({ todoItems, toggleItemDone }) => {
  return (
    <View style={styles.todoContainer}>
      <View style={styles.todoList}>
        {todoItems.map(item =>
          <TodoItem
            key={item.id}
            id={item.id}
            content={item.content}
            isDone={item.isDone}
            isEdit={item.isEdit}
            toggleItemDone={toggleItemDone}
          />)}
      </View>
    </View>
  )
};

export default TodoList;
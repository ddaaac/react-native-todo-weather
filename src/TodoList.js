import React from 'react';
import { View, FlatList } from 'react-native';

import { styles } from './css';
import TodoItem from './TodoItem';

const TodoList = ({ todoItems, toggleItemDone, toggleItemEdit, editItem, removeItem, inputValue, onChange, pushToDetail }) => {
  return (
    <View style={{
      ...styles.todoBody,
      ...styles.todoContainer
    }}>
      <FlatList
        style={styles.todoList}
        data={todoItems}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) =>
          <TodoItem
            id={item.id}
            content={item.content}
            isDone={item.isDone}
            isEdit={item.isEdit}
            toggleItemDone={toggleItemDone}
            toggleItemEdit={toggleItemEdit}
            editItem={editItem}
            removeItem={removeItem}
            inputValue={inputValue}
            onChange={onChange}
            pushToDetail={pushToDetail}
          />}
      >
        {todoItems.map(item =>
          <TodoItem
            key={item.id}
            id={item.id}
            content={item.content}
            isDone={item.isDone}
            isEdit={item.isEdit}
            toggleItemDone={toggleItemDone}
            toggleItemEdit={toggleItemEdit}
            editItem={editItem}
            removeItem={removeItem}
            inputValue={inputValue}
            onChange={onChange}
          />)}
      </FlatList>
    </View>
  )
};

export default TodoList;
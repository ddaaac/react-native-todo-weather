import React, { useReducer } from 'react';
import TodoHeader from './Header';
import TodoList from './TodoList';
import TodoInput from './TodoInput';
import TodoFooter from './TodoFooter';
import { View, TouchableWithoutFeedback } from 'react-native';
import { styles } from './css';
import { ACTION_TYPE } from './Action';

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.CHANGE_INPUT:
      return { ...state, input: action.input };
    case ACTION_TYPE.CHANGE_TODO_ITEMS:
      return { ...state, todoItems: action.todoItems };
    case ACTION_TYPE.CLEAR_INPUT:
      return { ...state, input: {} };
  }
};

const Main = () => {
  const [state, dispatch] = useReducer(reducer, {
    input: {},
    todoItems: [
      {
        id: Date.now(),
        content: '클랜징 폼 사기',
        isDone: false,
        isEdit: false,
      },
      {
        id: Date.now() + 1,
        content: '쉐이빙 폼 사기',
        isDone: true,
        isEdit: false,
      },
      {
        id: Date.now() + 2,
        content: '할 일 예시3',
        isDone: false,
        isEdit: true,
      },
    ],
  });

  const _changeInput = (key, value) => {
    dispatch({
      type: ACTION_TYPE.CHANGE_INPUT,
      input: { ...state.input, [key]: value }
    });
  };

  const changeTodoInput = (value) => {
    _changeInput('todoInput', value);
  };

  const changeTodoEditInput = (value) => {
    _changeInput('todoEditInput', value);
  };

  const _createTodoItem = ({ content, id = Date.now(), isDone = false, isEdit = false }) => {
    return { content, id, isDone, isEdit };
  };

  const addTodoItem = (content) => {
    dispatch({
      type: ACTION_TYPE.CHANGE_TODO_ITEMS,
      todoItems: [...state.todoItems, _createTodoItem({ content })],
    });
    dispatch({ type: ACTION_TYPE.CLEAR_INPUT });
  };

  const toggleItemDone = (id) => {
    const todoItems = state.todoItems.map(item =>
      item.id === id ? { ...item, isDone: !item.isDone } : item
    );
    dispatch({
      type: ACTION_TYPE.CHANGE_TODO_ITEMS,
      todoItems,
    });
  };

  const toggleItemEdit = (id) => {
    const todoItems = state.todoItems.map(item =>
      item.id === id ? { ...item, isEdit: !item.isEdit } : item
    );
    dispatch({
      type: ACTION_TYPE.CHANGE_TODO_ITEMS,
      todoItems,
    });
  };

  const editItem = (id, content) => {
    const todoItems = state.todoItems.map(item =>
      item.id === id ? { ...item, content, isEdit: false } : item
    );
    dispatch({
      type: ACTION_TYPE.CHANGE_TODO_ITEMS,
      todoItems,
    });
  };

  const removeItem = (id) => {
    const todoItems = state.todoItems.filter(item => item.id !== id);
    dispatch({
      type: ACTION_TYPE.CHANGE_TODO_ITEMS,
      todoItems,
    });
  };

  const cancelAllEdit = () => {
    const todoItems = state.todoItems.map(item =>
      item.isEdit ? { ...item, isEdit: false } : item
    );
    dispatch({
      type: ACTION_TYPE.CHANGE_TODO_ITEMS,
      todoItems,
    });
  };

  return (
    <TouchableWithoutFeedback onPress={cancelAllEdit}>
      <View style={styles.container}>
        <TodoHeader/>
        <TodoInput
          inputValue={state.input.todoInput}
          onChange={changeTodoInput}
          onPress={addTodoItem}
        />
        <TodoList
          todoItems={state.todoItems}
          toggleItemDone={toggleItemDone}
          toggleItemEdit={toggleItemEdit}
          removeItem={removeItem}
          inputValue={state.input.todoEditInput}
          onChange={changeTodoEditInput}
          editItem={editItem}
        />
        <TodoFooter/>
      </View>
    </TouchableWithoutFeedback>
  )
};

export default Main;
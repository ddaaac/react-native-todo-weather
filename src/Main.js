import React, { useReducer } from 'react';
import TodoHeader from './Header';
import TodoList from './TodoList';
import TodoInput from './TodoInput';
import TodoFooter from './TodoFooter';
import { View } from 'react-native';
import { styles } from './css';
import { ACTION_TYPE } from './Action';

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.CHANGE_INPUT:
      return { ...state, input: action.input };
    case ACTION_TYPE.ADD_TODO:
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
        content: '할 일 예시',
        isDone: false,
        isEdit: false,
      },
      {
        id: Date.now(),
        content: '할 일 예시2',
        isDone: true,
        isEdit: false,
      },
      {
        id: Date.now(),
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

  const _createTodoItem = ({ content, id = Date.now(), isDone = false, isEdit = false }) => {
    return { content, id, isDone, isEdit };
  };

  const addTodoItem = (content) => {
    dispatch({
      type: ACTION_TYPE.ADD_TODO,
      todoItems: [...state.todoItems, _createTodoItem({ content })],
    });
    dispatch({ type: ACTION_TYPE.CLEAR_INPUT });
  };

  return (
    <View style={styles.container}>
      <TodoHeader/>
      <TodoInput
        inputValue={state.input.todoInput}
        onChange={changeTodoInput}
        onPress={addTodoItem}
      />
      <TodoList/>
      <TodoFooter/>
    </View>
  )
};

export default Main;
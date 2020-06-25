import React, {useEffect} from 'react';
import {TouchableWithoutFeedback, View, AsyncStorage, Keyboard} from 'react-native';
import {useRecoilState, useRecoilValue} from 'recoil';
import PropTypes from 'prop-types';

import Header from './Header';
import TodoList from './TodoList';
import TodoInput from './TodoInput';
import TodoFooter from './TodoFooter';
import styles from './css';
import DEFAULT_TODO_ITEMS from './DefaultTodoItems';
import {todoItemsState, todoItemOnEditState} from './GlobalState';

const Todo = ({navigation}) => {
  const [todoItems, setTodoItems] = useRecoilState(todoItemsState);
  const isTodoItemEdit = useRecoilValue(todoItemOnEditState);

  const saveTodo = async () => {
    await AsyncStorage.setItem('@TodoWeather/Todos', JSON.stringify(todoItems));
  };

  useEffect(() => {
    const loadTodo = async () => {
      const loadedItems = await AsyncStorage.getItem('@TodoWeather/Todos');

      if (!loadedItems) {
        return DEFAULT_TODO_ITEMS;
      }
      return JSON.parse(loadedItems);
    };

    (async () => {
      const loadedItems = await loadTodo();

      setTodoItems(loadedItems);
    })();
  }, []);

  const cancelAllEdit = () => {
    Keyboard.dismiss();
    if (!isTodoItemEdit) {
      return;
    }
    const newTodoItems = todoItems.map(item =>
      (item.isEdit ? {...item, isEdit: false} : item),
    );

    setTodoItems(newTodoItems);
  };

  const pushToDetail = content => {
    navigation.push('Detail', {content});
  };

  return (
    <TouchableWithoutFeedback onPress={cancelAllEdit}>
      <View style={styles.container}>
        <Header title="Todo App"/>
        <TodoInput
          onSave={saveTodo}
        />
        <TodoList
          pushToDetail={pushToDetail}
        />
        <TodoFooter/>
      </View>
    </TouchableWithoutFeedback>
  );
};

Todo.propTypes = {
  navigation: PropTypes.shape({
    push: PropTypes.func,
  }),
};

export default Todo;

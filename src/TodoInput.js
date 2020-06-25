import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import ActionSheet from 'react-native-actionsheet';
import {useSetRecoilState} from 'recoil';
import PropTypes from 'prop-types';

import styles from './css';
import {todoItemsState, todoItemAddedState} from './GlobalState';

const TodoInput = ({onSave}) => {
  const [actionSheet, setActionSheet] = useState(null);
  const [input, setInput] = useState('');
  const setTodoItems = useSetRecoilState(todoItemsState);
  const setIsTodoItemAdded = useSetRecoilState(todoItemAddedState);

  const _createTodoItem = ({content, id = Date.now(), isDone = false, isEdit = false}) => {
    return {content, id, isDone, isEdit};
  };

  const addTodoItem = () => {
    setTodoItems(todoItems => [...todoItems, _createTodoItem({content: input})]);
    setIsTodoItemAdded(true);
    setInput('');
  };

  return (
    <View style={styles.todoContainer}>
      <View style={styles.todoInput}>
        <TextInput
          value={input}
          onChangeText={setInput}
          placeholder='Write your todo.'
          style={styles.fullFlex}
        />
        <TouchableOpacity
          onPress={addTodoItem}
          onLongPress={() => actionSheet.show()}
        >
          <AntDesign name='pluscircle' size={18} color='#24a0ed'/>
        </TouchableOpacity>
      </View>
      <ActionSheet
        ref={ref => setActionSheet(ref)}
        title={'Which one do you like ?'}
        options={['Add Todo', 'Save All', 'cancel']}
        cancelButtonIndex={2}
        // destructiveButtonIndex={1}
        onPress={index => {
          if (index === 0) {
            addTodoItem();
          } else if (index === 1) {
            onSave();
          }
        }}
      />
    </View>
  );
};

TodoInput.propTypes = {
  onSave: PropTypes.func,
};

export default TodoInput;

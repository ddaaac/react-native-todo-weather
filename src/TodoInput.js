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

  const _createTodoItem = content => ({content, id: Date.now(), isDone: false, isEdit: false});

  const addTodoItem = () => {
    setTodoItems(todoItems => [...todoItems, _createTodoItem(input)]);
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
        options={['Todo 목록에 추가', 'Todo 리스트 저장', '모두 제거', 'cancel']}
        cancelButtonIndex={3}
        destructiveButtonIndex={2}
        onPress={index => {
          if (index === 0) {
            addTodoItem();
          } else if (index === 1) {
            onSave();
          } else if (index === 2) {
            setTodoItems([]);
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

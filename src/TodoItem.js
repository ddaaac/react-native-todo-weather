import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRecoilState } from 'recoil';

import { styles } from './css';
import { todoItemsState } from './GlobalState';

const TodoItem = ({ item, pushToDetail }) => {
  const [input, setInput] = useState('');
  const [todoItems, setTodoItems] = useRecoilState(todoItemsState);

  const onToggleDone = () => {
    const newItems = toggleItemDone(todoItems, item.id);
    setTodoItems(newItems);
  };

  const onToggleEdit = () => {
    const newItems = toggleItemEdit(todoItems, item.id);
    setTodoItems(newItems);
  };

  const onEdit = () => {
    const newItems = editItem(todoItems, item.id, input);
    setTodoItems(newItems);
  };

  const onRemove = () => {
    const newItems = removeItem(todoItems, item.id);
    setTodoItems(newItems);
  };

  useEffect(() => {
    if (item.isEdit) {
      setInput(item.content);
    }
  }, [item.isEdit]);

  return (
    <View style={styles.todoItem}>
      <TouchableOpacity onPress={onToggleDone} style={styles.todoButton}>
        {item.isDone ?
          <MaterialCommunityIcons name="checkbox-marked-circle-outline" size={24}
                                  color="rgba(215,215,215,0.7)"/>
          :
          <MaterialCommunityIcons name="checkbox-blank-circle-outline" size={24}
                                  color="grey"/>
        }
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.todoContent}
        onLongPress={onToggleEdit}
        onPress={() => pushToDetail(item.content)}
      >
        {item.isEdit ?
          <TextInput value={input} onChangeText={setInput}
                     onSubmitEditing={onEdit}
                     autoFocus
            // selectTextOnFocus
          />
          :
          <Text style={item.isDone ? styles.todoDone : {}}>
            {item.content}
          </Text>
        }
      </TouchableOpacity>
      <TouchableOpacity onPress={onRemove} style={styles.todoButton}>
        <MaterialIcons name="delete" size={24}
                       color={item.isDone ? 'rgba(215,215,215,0.7)' : 'grey'}/>
      </TouchableOpacity>
    </View>
  )
};

function toggleItemDone(todoItems, id) {
  return todoItems.map(item => {
    if (item.id !== id) {
      return item;
    }
    return { ...item, isDone: !item.isDone };
  });
}

function toggleItemEdit(todoItems, id) {
  return todoItems.map(item => {
    if (item.id !== id) {
      return item;
    }
    return { ...item, isEdit: !item.isEdit };
  });
}

function editItem(todoItems, id, content) {
  return todoItems.map(item => {
    if (item.id !== id) {
      return item;
    }
    return { ...item, content, isEdit: false };
  });
}

function removeItem(todoItems, id) {
  return todoItems.filter(item => item.id !== id);
}

export default TodoItem;
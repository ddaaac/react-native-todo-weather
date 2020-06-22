import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from './css';

const TodoItem = ({ id, content, isEdit, isDone, toggleItemDone, toggleItemEdit, editItem, removeItem, inputValue, onChange }) => {
  useEffect(() => {
    if (isEdit) {
      onChange(content);
    }
  }, [isEdit]);

  return (

    <View style={styles.todoItem}>
      <TouchableOpacity onPress={() => toggleItemDone(id)} style={styles.todoButton}>
        {isDone ?
          <MaterialCommunityIcons name="checkbox-marked-circle-outline" size={24}
                                  color="rgba(215,215,215,0.7)"/>
          :
          <MaterialCommunityIcons name="checkbox-blank-circle-outline" size={24} color="grey"/>
        }
      </TouchableOpacity>
      <TouchableOpacity style={styles.todoContent} onLongPress={() => toggleItemEdit(id)}>
        {isEdit ?
          <TextInput value={inputValue} onChangeText={onChange}
                     onSubmitEditing={() => editItem(id, inputValue)}
                     autoFocus selectTextOnFocus
          />
          :
          <Text style={isDone ? styles.todoDone : {}}>
            {content}
          </Text>
        }
      </TouchableOpacity>
      <TouchableOpacity onPress={() => removeItem(id)} style={styles.todoButton}>
        <MaterialIcons name="delete" size={24} color={isDone ? 'rgba(215,215,215,0.7)' : 'grey'}/>
      </TouchableOpacity>
    </View>
  )
};

export default TodoItem;
import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './css';
import { AntDesign } from '@expo/vector-icons';

const TodoInput = ({ inputValue, onChange, onPress }) => {
  return (
    <View style={styles.todoContainer}>
      <View style={styles.todoInput}>
        <TextInput
          value={inputValue ? inputValue : ''}
          onChangeText={onChange}
          placeholder='Write your todo.'
          style={styles.fullFlex}
        />
        <TouchableOpacity onPress={() => onPress(inputValue)}>
          <AntDesign name='pluscircle' size={18} color='#24a0ed'/>
        </TouchableOpacity>
      </View>
    </View>
  )
};

export default TodoInput;
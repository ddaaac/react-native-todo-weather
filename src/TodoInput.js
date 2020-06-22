import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './css';
import { AntDesign } from '@expo/vector-icons';

const TodoInput = () => {
  return (
    <View style={styles.todoContainer}>
      <View style={styles.todoInput}>
        <TextInput placeholder='Write your todo.' style={styles.fullFlex}/>
        <TouchableOpacity onPress={() => console.log("touched!")}>
          <AntDesign name='pluscircle' size={18} color='#24a0ed'/>
        </TouchableOpacity>
      </View>
    </View>
  )
};

export default TodoInput;
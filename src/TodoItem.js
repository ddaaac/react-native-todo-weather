import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from './css';

const TodoItem = ({ id, content, isEdit, isDone, toggleItemDone }) => {
  const textStyle = isDone ?
    {
      ...styles.todoContent,
      ...styles.todoDone,
    }
    :
    styles.todoContent;
  return (
    <View style={styles.todoItem}>
      <TouchableOpacity onPress={() => toggleItemDone(id)} style={styles.todoButton}>
        {isDone ?
          <MaterialCommunityIcons name="checkbox-marked-circle-outline" size={24}
                                  color="rgba(215,215,215,0.7)"/>
          :
          <MaterialCommunityIcons name="checkbox-blank-circle-outline" size={24} color="grey"/>}
      </TouchableOpacity>
      <Text style={textStyle}>
        {content}
      </Text>
      <TouchableOpacity onPress={() => console.log("touched!")} style={styles.todoButton}>
        <MaterialIcons name="delete" size={24} color={isDone ? 'rgba(215,215,215,0.7)' : 'grey'}/>
      </TouchableOpacity>
    </View>
  )
};

export default TodoItem;
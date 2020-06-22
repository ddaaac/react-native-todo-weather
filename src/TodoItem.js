import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from './css';

const TodoItem = () => (
  <View style={styles.todoItem}>
    <TouchableOpacity onPress={() => console.log("touched!")} style={{
      alignItems: 'center',
      ...styles.fullFlex,
    }}>
      <MaterialCommunityIcons name="checkbox-blank-circle-outline" size={24} color="grey"/>
      {/*<MaterialCommunityIcons name="checkbox-marked-circle-outline" size={24} color="rgba(215,215,215,0.5)"/>*/}
    </TouchableOpacity>
    <Text style={{
      // color: 'rgba(215,215,215,0.5)',
      // textDecorationLine: 'line-through',
      flex: 5,
    }}>
      굉장히 길고 길고 길고 길고 긴 굉 히 길고 길고 길고 길고 긴 할 일 예시입니다.
    </Text>
    <TouchableOpacity onPress={() => console.log("touched!")} style={{
      alignItems: 'center',
      ...styles.fullFlex,
    }}>
      <MaterialIcons name="delete" size={24} color={'grey' /*: 'rgba(215,215,215,0.5)'*/}/>
    </TouchableOpacity>
  </View>
);

export default TodoItem;
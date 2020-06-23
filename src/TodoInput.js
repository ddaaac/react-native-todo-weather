import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import ActionSheet from 'react-native-actionsheet';

import { styles } from './css';

const TodoInput = ({ inputValue, onChange, onPress, onSave }) => {
  const [actionSheet, setActionSheet] = useState(null);

  return (
    <View style={styles.todoContainer}>
      <View style={styles.todoInput}>
        <TextInput
          value={inputValue ? inputValue : ''}
          onChangeText={onChange}
          placeholder='Write your todo.'
          style={styles.fullFlex}
        />
        <TouchableOpacity onPress={() => onPress(inputValue)}
                          onLongPress={() => actionSheet.show()}>
          <AntDesign name='pluscircle' size={18} color='#24a0ed'/>
        </TouchableOpacity>
      </View>
      <ActionSheet
        ref={o => setActionSheet(o)}
        title={'Which one do you like ?'}
        options={['Add Todo', 'Save All', 'cancel']}
        cancelButtonIndex={2}
        // destructiveButtonIndex={1}
        onPress={(index) => {
          if (index === 0) {
            onPress(inputValue);
          } else if (index === 1) {
            onSave();
          }
        }}
      />
    </View>
  )
};

export default TodoInput;
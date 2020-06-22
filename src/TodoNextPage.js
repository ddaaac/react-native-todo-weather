import React from 'react';
import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const TodoNextPage = ({ onNext }) => {
  return (
    <TouchableOpacity onPress={onNext}>
      <AntDesign name="arrowright" size={24} color="grey"/>
    </TouchableOpacity>
  )
};

export default TodoNextPage;
import React from 'react';
import { Text } from 'react-native';

import { styles } from './css';

const Header = ({ title }) => {
  return (
    <Text style={styles.headerTitle}>{title}</Text>
  )
};

export default Header;
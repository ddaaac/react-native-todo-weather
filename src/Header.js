import React from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';

import styles from './css';

const Header = ({title}) => (
  <Text style={styles.headerTitle}>{title}</Text>
);

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;

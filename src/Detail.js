import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';

import styles from './css';
import Header from './Header';

const Detail = ({route}) => {
  const {content} = route.params;

  return (
    <View style={styles.container}>
      <Header title="Detail"/>
      <View style={{
        ...styles.todoContainer,
        ...styles.todoDetail,
      }}>
        <Text>
          {content}
        </Text>
      </View>
    </View>
  );
};

Detail.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      content: PropTypes.string,
    }),
  }),
};

export default Detail;

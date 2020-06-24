import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';

import { styles } from './css';
import TodoHeader from './Header';
import WeatherInfo from './WeatherInfo';

const Weather = ({ index }) => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await requestPermissionsAsync();
      if (status !== 'granted') {
        // TODO: Alert
        return;
      }
      const location = await getCurrentPositionAsync();
      setLocation(location);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <TodoHeader title="Weather"/>
      <View style={styles.center}>
        {location ?
          <WeatherInfo longitude={location.coords.longitude} latitude={location.coords.latitude}/>
          :
          <Text>위치 정보를 켜주세요.</Text>
        }
      </View>
    </View>
  )
};

export default Weather;
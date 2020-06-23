import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View, Text, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import useAxios from 'axios-hooks';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';

import { URL } from './Api';
import { styles } from './css';
import TodoHeader from './Header';

const appId = 'API_KEY';

const Weather = ({ index }) => {
  const [location, setLocation] = useState(null);

  const [{ data: weatherData, loading: isWeatherLoading, error: weatherError }, getWeather] = useAxios(
    URL.GET_WEATHER(location, appId),
    { manual: true }
  );

  useEffect(() => {
    (async () => {
      const { status } = await requestPermissionsAsync();
      if (status === 'granted') {
        const location = await getCurrentPositionAsync();
        setLocation(location);
      } else {
        setLocation({ coords: { 'latitude': 37.7, 'longitude': 126.9 } });
      }
    })();
  }, []);

  useEffect(() => {
    if (location) {
      getWeather();
    }
  }, [location]);

  return (
    <View style={styles.container}>
      <TodoHeader title="Weather"/>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
        {(!location || isWeatherLoading || !weatherData) && !weatherError ?
          <View style={{ justifyContent: 'center', flex: 1 }}>
            <ActivityIndicator size="large"/>
          </View>
          :
          <View>
            <View style={{ justifyContent: 'flex-end', alignItems: 'center', flex: 1 }}>
              <Image style={{
                width: 200,
                height: 200,
                resizeMode: 'stretch',
              }} source={{ uri: URL.WEATHER_ICON(weatherData.weather[0].icon) }}/>
            </View>
            <Text style={{ flex: 1, fontSize: 30, textAlign: 'center' }}>
              {weatherData.name}{'\n'}{Math.round(weatherData.main.temp * 10 - 2731.5) / 10}
            </Text>
          </View>
        }
      </View>
    </View>
  )
};

export default Weather;
import React from 'react';
import { ActivityIndicator, Image, Text, View } from 'react-native';
import useAxios from 'axios-hooks';

import { styles } from './css';

const appId = 'API_KEY';

const WeatherInfo = ({ latitude, longitude }) => {
  const [{ data: weatherData, loading: isWeatherApiLoading, error: weatherApiError }, getWeather] = useAxios(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${appId}`,
  );

  if (isWeatherApiLoading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large"/>
      </View>
    );
  }

  if (weatherApiError) {
    return (
      <View style={styles.center}>
        <Text>{weatherApiError.response.data.cod}</Text>
        <Text>{weatherApiError.response.data.message}</Text>
      </View>
    );
  }

  return (
    <View>
      <View style={styles.columnEnd}>
        <Image
          style={styles.weatherIcon}
          source={{ uri: `http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png` }}
        />
      </View>
      <Text style={styles.weatherText}>
        {weatherData.name}{'\n'}{Math.round(weatherData.main.temp * 10 - 2731.5) / 10}
      </Text>
    </View>
  );
};

export default WeatherInfo;
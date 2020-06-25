import React, {useState, useEffect} from 'react';
import {View, Text, Alert, Platform, Linking} from 'react-native';
import {requestPermissionsAsync, getCurrentPositionAsync, PermissionStatus} from 'expo-location';
import {startActivityAsync, ACTION_LOCATION_SOURCE_SETTINGS} from 'expo-intent-launcher';

import styles from './css';
import Header from './Header';
import WeatherInfo from './WeatherInfo';

const Weather = () => {
  const [location, setLocation] = useState(null);

  const openLocationSetting = async () => {
    if (Platform.OS === 'android') {
      // TODO: 안드로이드는 작동하는지 확인해봐야함
      await startActivityAsync(ACTION_LOCATION_SOURCE_SETTINGS);
    }
    if (Platform.OS === 'ios') {
      Linking.openURL('app-settings:');
    }
  };

  useEffect(() => {
    (async () => {
      const {status} = await requestPermissionsAsync();

      if (status !== PermissionStatus.GRANTED) {
        Alert.alert(
          '위치 정보 이용 동의',
          '날씨 정보를 받아보고 싶다면 위치 정보 이용을 동의해주세요.',
          [{text: '지금 할게요', onPress: () => openLocationSetting()}, {text: '나중에 할게요'}],
          {cancelable: false},
        );
        return;
      }
      const locationData = await getCurrentPositionAsync();

      setLocation(locationData);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Header title="Weather"/>
      <View style={styles.center}>
        {location ?
          <WeatherInfo longitude={location.coords.longitude} latitude={location.coords.latitude}/> :
          <Text>위치 정보를 켜주세요.</Text>
        }
      </View>
    </View>
  );
};

export default Weather;

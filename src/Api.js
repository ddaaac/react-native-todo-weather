export const URL = {
  GET_WEATHER: (location, appId) => {
    if (!location) {
      return 'NOT_VALID_DATA';
    }
    return `https://api.openweathermap.org/data/2.5/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=${appId}`;
  },
  WEATHER_ICON: (iconName) => {
    return `http://openweathermap.org/img/w/${iconName}.png`;
  },
};
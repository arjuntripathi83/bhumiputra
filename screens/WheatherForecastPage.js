import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, FlatList, Modal, Image } from 'react-native';

const WeatherForecastPage = ({ visible, setVisible }) => {
  const [weatherData, setWeatherData] = useState({
    base: 'stations',
    clouds: { all: 40 },
    cod: 200,
    coord: { lat: 26.8467, lon: 80.9462 },
    dt: 1685942598,
    id: 1264733,
    main: { feels_like: 312.35, humidity: 52, pressure: 1005, temp: 315.2, temp_max: 318.2, temp_min: 310.2 },
    name: 'Lucknow',
    sys: { country: 'IN', id: 9176, sunrise: 1685922135, sunset: 1685971636, type: 1 },
    timezone: 19800,
    visibility: 5000,
    weather: [{ description: 'haze', icon: '50d', id: 721, main: 'Haze' }],
    wind: { deg: 340, speed: 3.6 }
  });

  const getWeatherData = async () => {
    const res = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=26.8467&lon=80.9462&appid=0ceed5dde14f90394e94171fd6991fec');
    const data = await res.json();
    console.log(data);
    setWeatherData(data);
    // setLoading(false);
  };

  const kelvinToCelcius = (kelvin) => {
    return Math.round(kelvin - 273.15);
  };

  useEffect(() => {
    // getWeatherData();
  }, []);

  const getCloudImage = (value) => {
    if (value > 0 && value <= 20) {
      return 'https://openweathermap.org/img/w/02d.png';
    } else if (value > 20 && value <= 40) {
      return 'https://openweathermap.org/img/w/03d.png';
    } else if (value > 40 && value <= 60) {
      return 'https://openweathermap.org/img/w/04d.png';
    } else if (value > 60 && value <= 80) {
      return 'https://openweathermap.org/img/w/04d.png';
    } else if (value > 80 && value <= 100) {
      return 'https://openweathermap.org/img/w/04d.png';
    }
  };

  const dailyForecasts = [
    { day: 'Monday', temperature: '32°C' },
    { day: 'Tuesday', temperature: '35°C' },
    { day: 'Wednesday', temperature: '44°C' },
    { day: 'Thursday', temperature: '41°C' },
    { day: 'Friday', temperature: '43°C' }
  ];

  const renderDailyForecastItem = ({ item }) => (
    <View style={styles.dailyForecastItem}>
      <Text style={styles.dayText}>{item.day}</Text>
      <Text style={styles.temperatureText}>{item.temperature}</Text>
    </View>
  );

  return (
    <Modal visible={visible} onRequestClose={() => setVisible(false)} animationType="fade">
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/images/weather-bg.webp')} // Replace with your background image
          style={styles.backgroundImage}
          resizeMode="cover"
        >
          <View style={styles.contentContainer}>
            <View style={styles.widget}>
            
              <Image style={styles.widgetImg} source={require('../assets/weatherImages/sun.png')} />
              <View style={styles.temperatureContainer}>
                <Text style={styles.temperatureTextMin}>{kelvinToCelcius(weatherData.main.temp_min)}°C</Text>
                <Text style={styles.temperatureTextMain}>{kelvinToCelcius(weatherData.main.temp)}°C</Text>
                <Text style={styles.temperatureTextMax}>{kelvinToCelcius(weatherData.main.temp_max)}°C</Text>
              </View>
            </View>
            <View style={styles.forecast}>
              <FlatList
                data={dailyForecasts}
                renderItem={({ item }) => (
                  <View style={styles.forecastContainer}>
                    <Text style={styles.forecastTitle}>{item.day}</Text>
                    <Text style={styles.forecastTitle}>{item.temperature}</Text>
                    {/* <Image style={styles.forecastImage} source={{ uri: getCloudImage(weatherData.clouds.all) }} /> */}
                  </View>
                )}
                keyExtractor={(item, index) => index.toString()}
                horizontal
              />
            </View>
            {/* <View style={styles.weatherInfoContainer}>
            <Text style={styles.temperatureText}>25°C</Text>
            <Text style={styles.cityText}>San Francisco</Text>
          </View> */}
            {/* <View style={styles.forecastContainer}>
            <Text style={styles.forecastTitle}>Daily Forecast</Text>
            <FlatList
              data={dailyForecasts}
              renderItem={renderDailyForecastItem}
              keyExtractor={(item, index) => index.toString()}
              horizontal
            />
          </View> */}
          </View>
        </ImageBackground>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backgroundImage: {
    flex: 1
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)' // Add a transparent overlay
  },
  weatherInfoContainer: {
    // marginBottom: 40,
    alignItems: 'center'
  },
  temperatureText: {
    fontSize: 72,
    color: 'white',
    fontWeight: 'bold'
  },
  cityText: {
    fontSize: 24,
    color: 'white'
  },
  forecastContainer: {
    alignItems: 'center'
  },
  forecastTitle: {
    fontSize: 24,
    color: 'white',
    marginBottom: 10
  },
  dailyForecastItem: {
    marginRight: 10,
    alignItems: 'center'
  },
  dayText: {
    fontSize: 18,
    color: 'white'
  },
  temperatureText: {
    fontSize: 18,
    color: 'white'
  },
  widget: {
    flex: 2,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    height: '100%',
    padding: 20
  },
  widgetImg: {
    width: 150,
    height: 150
  },
  temperatureContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20
  },
  temperatureTextMin: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold'
  },
  temperatureTextMax: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold'
  },
  temperatureTextMain: {
    fontSize: 72,
    color: 'white',
    fontWeight: 'bold'
  },
  forecast: {
    flex: 3
  }
});

export default WeatherForecastPage;

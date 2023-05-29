import React from 'react';
import { View, Text, StyleSheet, ImageBackground, FlatList } from 'react-native';

const WeatherForecastPage = () => {
  const dailyForecasts = [
    { day: 'Monday', temperature: '22°C' },
    { day: 'Tuesday', temperature: '25°C' },
    { day: 'Wednesday', temperature: '24°C' },
    { day: 'Thursday', temperature: '21°C' },
    { day: 'Friday', temperature: '23°C' },
  ];

  const renderDailyForecastItem = ({ item }) => (
    <View style={styles.dailyForecastItem}>
      <Text style={styles.dayText}>{item.day}</Text>
      <Text style={styles.temperatureText}>{item.temperature}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./background.jpg')} // Replace with your background image
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.contentContainer}>
          <View style={styles.weatherInfoContainer}>
            <Text style={styles.temperatureText}>25°C</Text>
            <Text style={styles.cityText}>San Francisco</Text>
          </View>
          <View style={styles.forecastContainer}>
            <Text style={styles.forecastTitle}>Daily Forecast</Text>
            <FlatList
              data={dailyForecasts}
              renderItem={renderDailyForecastItem}
              keyExtractor={(item, index) => index.toString()}
              horizontal
            />
            {/* Add the hourly forecast chart here */}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Add a transparent overlay
  },
  weatherInfoContainer: {
    marginBottom: 40,
    alignItems: 'center',
  },
  temperatureText: {
    fontSize: 72,
    color: 'white',
    fontWeight: 'bold',
  },
  cityText: {
    fontSize: 24,
    color: 'white',
  },
  forecastContainer: {
    alignItems: 'center',
  },
  forecastTitle: {
    fontSize: 24,
    color: 'white',
    marginBottom: 10,
  },
  dailyForecastItem: {
    marginRight: 10,
    alignItems: 'center',
  },
  dayText: {
    fontSize: 18,
    color: 'white',
  },
  temperatureText: {
    fontSize: 18,
    color: 'white',
  },
});

export default WeatherForecastPage;
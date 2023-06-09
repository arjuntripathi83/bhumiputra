import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import * as Location from 'expo-location';

// Replace 'API_KEY' with your own Google Maps API key
const API_KEY = 'API_KEY';

const ColdStoragePage = () => {
  const [location, setLocation] = useState(null);
  const [coldStorages, setColdStorages] = useState([]);

  useEffect(() => {
    // Request permission to access the user's location
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.error('Permission to access location was denied');
        return;
      }

      // Get the current location
      let { coords } = await Location.getCurrentPositionAsync({});
      setLocation(coords);
    })();
  }, []);

  useEffect(() => {
    if (location) {
      // Fetch nearby cold storages based on user's location
      fetchColdStorages();
    }
  }, [location]);

  const fetchColdStorages = async () => {
    const { latitude, longitude } = location;
    const radius = 1000; // Specify the radius (in meters) for nearby search

    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&keyword=cold storage&key=${API_KEY}`
      );
      const data = await response.json();
      setColdStorages(data.results);
    } catch (error) {
      console.error('Error fetching cold storages:', error);
    }
  };

  const renderColdStorages = () => {
    if (coldStorages.length === 0) {
      return <Text>No cold storages found nearby.</Text>;
    }

    return coldStorages.map((coldStorage, index) => (
      <View key={index}>
        <Text>{coldStorage.name}</Text>
        <Text>{coldStorage.vicinity}</Text>
        <Text>{coldStorage.opening_hours?.open_now ? 'Open' : 'Closed'}</Text>
        <Button title="Check Availability" onPress={() => handleAvailability(coldStorage)} />
      </View>
    ));
  };

  const handleAvailability = (coldStorage) => {
    // Implement your logic to handle the availability feature
    console.log(`Checking availability for ${coldStorage.name}`);
  };

  return (
    <View>
      <Text>Nearby Cold Storages</Text>
      {renderColdStorages()}
    </View>
  );
};

export default ColdStoragePage;

import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import * as Location from 'expo-location';

const API_KEY = 'YOUR_API_KEY';

const ColdStoragePage = () => {
  const [location, setLocation] = useState(null);
  const [coldStorages, setColdStorages] = useState([]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.error('Permission to access location was denied');
        return;
      }

      let { coords } = await Location.getCurrentPositionAsync({});
      setLocation(coords);
    })();
  }, []);

  useEffect(() => {
    if (location) {
      fetchColdStorages();
    }
  }, [location]);

  const fetchColdStorages = async () => {
    const { latitude, longitude } = location;
    const radius = 1000;

    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&keyword=cold+storage&key=${API_KEY}`
      );
      const data = await response.json();
      setColdStorages(data.results);
    } catch (error) {
      console.error('Error fetching cold storages:', error);
    }
  };

  const renderColdStorages = () => {
    if (coldStorages.length === 0) {
      return <Text style={styles.noResultsText}>No cold storages found nearby.</Text>;
    }

    return coldStorages.map((coldStorage, index) => (
      <View key={index} style={styles.coldStorageContainer}>
        <Text style={styles.coldStorageName}>{coldStorage.name}</Text>
        <Text style={styles.coldStorageAddress}>{coldStorage.vicinity}</Text>
        <Text style={styles.coldStorageStatus}>
          {coldStorage.opening_hours?.open_now ? 'Open' : 'Closed'}
        </Text>
        <Button
          title="Check Availability"
          onPress={() => handleAvailability(coldStorage)}
        />
      </View>
    ));
  };

  const handleAvailability = (coldStorage) => {
    console.log(`Checking availability for ${coldStorage.name}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Nearby Cold Storages</Text>
      {renderColdStorages()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  coldStorageContainer: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  coldStorageName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  coldStorageAddress: {
    marginBottom: 8,
  },
  coldStorageStatus: {
    marginBottom: 8,
  },
  noResultsText: {
    textAlign: 'center',
    marginTop: 16,
  },
});

export default ColdStoragePage;

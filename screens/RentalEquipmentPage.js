import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import firebase from 'firebase/app';
import 'firebase/firestore';

const RentalEquipmentPage = () => {
  const [equipments, setEquipments] = useState([]);

  useEffect(() => {
    // Initialize Firebase
    if (!firebase.apps.length) {
      const firebaseConfig = {
        // Your Firebase configuration
      };
      firebase.initializeApp(firebaseConfig);
    }

    // Fetch rental equipments from Firebase
    fetchEquipments();
  }, []);

  const fetchEquipments = async () => {
    try {
      const snapshot = await firebase.firestore().collection('equipments').get();
      const data = snapshot.docs.map((doc) => doc.data());
      setEquipments(data);
    } catch (error) {
      console.error('Error fetching equipments:', error);
    }
  };

  const renderEquipmentItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => checkAvailability(item)}>
      <Text style={styles.itemTitle}>{item.name}</Text>
      <Text style={styles.itemAvailability}>{item.available ? 'Available' : 'Not Available'}</Text>
    </TouchableOpacity>
  );

  const checkAvailability = (equipment) => {
    // Implement your logic to check availability and navigate to equipment details page
    console.log(`Checking availability for ${equipment.name}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rental Equipment</Text>
      <FlatList
        data={equipments}
        renderItem={renderEquipmentItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  itemContainer: {
    marginBottom: 16,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemAvailability: {
    fontSize: 16,
    color: 'gray',
  },
});

export default RentalEquipmentPage;

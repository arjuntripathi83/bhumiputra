import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import app from '../firebaseConfig';

const RentalEquipmentPage = ({visible, setVisible}) => {
  const [equipmentList, setEquipmentList] = useState([]);

  useEffect(() => {
    fetchEquipmentData();
  }, [])
  

  const fetchEquipmentData = () => {
    // setLoading(true);
    const db = getFirestore(app);
    const ref = collection(db, "Equipments");
    getDocs(ref).then((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        obj: doc.data(),
      }));
      console.log(data);
      setEquipmentList(data);
      // setMasterList(data);
      // setLoading(false);
    });
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
    <Modal visible={visible} onRequestClose={() => setVisible(false)} animationType="slide">
    <View style={styles.container}>
      <Text style={styles.title}>Rental Equipment</Text>
      <FlatList
        data={equipmentList}
        renderItem={renderEquipmentItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
    </Modal>
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

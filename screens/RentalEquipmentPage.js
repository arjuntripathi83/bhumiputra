import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Modal, Image } from 'react-native';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import app from '../firebaseConfig';

const RentalEquipmentPage = ({ visible, setVisible }) => {
  const [equipmentList, setEquipmentList] = useState([]);

  useEffect(() => {
    fetchEquipmentData();
  }, []);

  const fetchEquipmentData = () => {
    const db = getFirestore(app);
    const ref = collection(db, 'Equipments');
    getDocs(ref).then((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        obj: doc.data(),
      }));
      console.log(data);
      setEquipmentList(data);
    });
  };

  const renderEquipmentItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => checkAvailability(item)}>
      <Text style={styles.itemTitle}>{item.name}</Text>
      <Text style={styles.itemAvailability}>{item.available ? 'Available' : 'Not Available'}</Text>
    </TouchableOpacity>
  );

  const checkAvailability = (equipment) => {
    console.log(`Checking availability for ${equipment.name}`);
  };

  const goBack = () => {
    setVisible(false);
  };

  return (
    <Modal visible={visible} onRequestClose={goBack} animationType="slide">
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={goBack}>
          <Image style={styles.backButtonImage} source={require('../assets/icons/left-arrow.png')} />
        </TouchableOpacity>
        <Text style={styles.title}>Rental Equipment</Text>
        <FlatList data={equipmentList} renderItem={renderEquipmentItem} keyExtractor={(item) => item.id.toString()} />
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
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
    padding: 10,
  },
  backButtonImage: {
    width: 24,
    height: 24,
  },
});

export default RentalEquipmentPage;

import React, { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import equipmentData from "./equipmentList";
import app from "../firebaseConfig";
import { Button } from "react-native-paper";
import EquipmentsDetails from "./EquipmentsDetails";

const Equipmentsbrowser = () => {
  const [equipmentList, setEquipmentList] = useState([]);
  const [loading, setLoading] = useState(false);

  const [selEquipment, setSelEquipment] = useState(null);

  const [viewModal, setViewModal] = useState(false);

  const fetchEquipmentData = () => {
    setLoading(true);
    const db = getFirestore(app);
    const ref = collection(db, "Equipments");
    getDocs(ref).then((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        obj: doc.data(),
      }));
      console.log(data);
      setEquipmentList(data);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchEquipmentData();
  }, []);

  const showProducts = () => {
    return (
      <View>
        {equipmentList.map((item) => (
          <View style={styles.productContainer}>
            <Image
              source={{ uri: item.obj.Image }}
              style={styles.productImage}
            />
            <Text>{item.obj.Name}</Text>
            <Text>{item.obj.Price}</Text>
            <Text>{item.obj.Description}</Text>
            <Button onPress={(e) => {
              setViewModal(true);
              setSelEquipment(item)}}>View More</Button>
          </View>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <ScrollView>{showProducts()}</ScrollView>
      {selEquipment && (
        <EquipmentsDetails
        equipmentData={selEquipment}
          app={app}
          visible={viewModal}
          setVisible={setViewModal}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {},
  productImage: {
    width: "100%",
    height: 300,
    borderRadius: 20,
  },
  productContainer: {
    marginBottom: 40,
  },
});

export default Equipmentsbrowser;

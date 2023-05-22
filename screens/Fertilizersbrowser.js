import React, { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import FertilizersData from "./FertilizersList";
import app from "../firebaseConfig";
import { Button } from "react-native-paper";
import FertilizersDetails from "./FertilizersDetails";

const Fertilizersbrowser = () => {
  const [FertilizersList, setFertilizerList] = useState([]);
  const [loading, setLoading] = useState(false);

  const [selFertilizer, setSelFertilizer] = useState(null);

  const [viewModal, setViewModal] = useState(false);

  const fetchFertilizerData = () => {
    setLoading(true);
    const db = getFirestore(app);
    const ref = collection(db, "Fertilizers");
    getDocs(ref).then((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        obj: doc.data(),
      }));
      console.log(data);
      setFertilizerList(data);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchFertilizerData();
  }, []);

  const showProducts = () => {
    return (
      <View>
        {FertilizersList.map((item) => (
          <View style={styles.productContainer}>
            <Image
              source={{ uri: item.obj.Image }}
              style={styles.productImage}
            />
            <Text>{item.obj.Title}</Text>
            <Text>{item.obj.Price}</Text>
            <Text>{item.obj.Description}</Text>
            <Button onPress={(e) => {
              setViewModal(true);
              setSelFertilizer(item)}}>View More</Button>
          </View>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <ScrollView>{showProducts()}</ScrollView>
      {selFertilizer && (
        <FertilizersDetails
        FertilizerData={selFertilizer}
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

export default Fertilizersbrowser;

import React, { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import SeedsData from "./SeedsList";
import app from "../firebaseConfig";
import { Button } from "react-native-paper";
import SeedsDetails from "./FertilizersDetails";

const Seedsbrowser = () => {
  const [SeedsList, setSeedList] = useState([]);
  const [loading, setLoading] = useState(false);

  const [selSeeds, setSelSeeds] = useState(null);

  const [viewModal, setViewModal] = useState(false);

  const fetchSeedsData = () => {
    setLoading(true);
    const db = getFirestore(app);
    const ref = collection(db, "Seeds");
    getDocs(ref).then((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        obj: doc.data(),
      }));
      console.log(data);
      setSeedList(data);
      setLoading(false);
    });
  };

  useEffect(() => {
    console.log('seed');
    fetchSeedsData();
  }, []);

  const showProducts = () => {
    return (
      <View>
        {SeedsList.map((item) => (
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
      {selSeeds && (
        <SeedsDetails
        SeedsData={selSeeds}
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

export default Seedsbrowser;

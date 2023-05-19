import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import equipmentData from "./equipmentList";
import { Card } from "react-native-paper";

// import { collection, getDocs, getFirestore } from "firebase/firestore";
// import app from "../firebaseconfig";

const Equipmentsbrowser = () => {
  const [equipmentList, setEquipmentList] = useState([equipmentData]);
  const [loading, setLoading] = useState(false);

  // const fetchEquipmentData = () => {
  //   setLoading(true);
  //   const db = getFirestore(app);
  //   const ref = collection(db, "equipment");
  //   getDocs(ref).then((snapshot) => {
  //     const data = snapshot.docs.map((doc) => ({
  //       id: doc.id,
  //       obj: doc.data(),
  //     }));
  //     // console.log(data[0].obj.name);
  //     setEquipmentList(data);
  //     setLoading(false);
  //   });
  // };

  useEffect(() => {
    fetchEquipmentData();
  }, []);

  const ProductCard = ({ product }) => {
    console.log(product);
    return (
      <Card>
        <Card.Title>{product.name}</Card.Title>
        <Card.Divider />
        <Image source={{ uri: product.image }} style={styles.image} />
        <Text>{product.description}</Text>
        <Text>{product.price}</Text>
      </Card>
    );
  };

  const ProductList = () => {
    return (
      <View>
        <FlatList
          data={equipmentList}
          renderItem={({ item }) => <ProductCard product={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  };

  return (
    <View>
      <View style={styles.header}></View>
      <View>{loading ? <Text>Loading...</Text> : <ProductList /> } </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {},
});

export default Equipmentsbrowser;

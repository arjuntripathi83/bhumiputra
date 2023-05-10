import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import equipmentData from "./equipmentList";

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

  const ProductsList = () => {
    return (
      <View>
        <FlatList
          data={productsData}
          renderItem={({ item }) => <ProductCard product={item} />}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    );
  };

  return (
    <View>
      <View style={styles.header}></View>
      <View>{loading ? <Text>Loading...</Text> : <ProductsList />}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {},
});

export default Equipmentsbrowser;

import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import app from "../firebaseConfig";

import { collection, getDocs, getFirestore } from "firebase/firestore";

const Equipmentsbrowser = () => {

  const [equipmentList, setEquipmentList] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchEquipmentData = () => {
    setLoading(true);
    const db = getFirestore(app);
    const ref = collection(db, "equipment");
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
  }, [])
  

  const productsData = [
    {
      id: 1,
      name: 'Product 1',
      description: 'This is product 1',
      image: 'https://picsum.photos/200',
      price: '$10.00',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'This is product 2',
      image: 'https://picsum.photos/200',
      price: '$15.00',
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'This is product 3',
      image: 'https://picsum.photos/200',
      price: '$20.00',
    },
  ];
  
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
      <Text>Equipmentsbrowser</Text>
    </View>
  );
};

export default Equipmentsbrowser;

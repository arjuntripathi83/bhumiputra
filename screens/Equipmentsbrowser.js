import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import equipmentData from "./equipmentList";
import app from "../firebaseConfig";
import { Button, IconButton, TouchableOpacity } from "react-native-paper";
import EquipmentsDetails from "./EquipmentsDetails";
import Carousel from "react-native-snap-carousel";

const Equipmentsbrowser = () => {
  const [equipmentList, setEquipmentList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [isListening, setIsListening] = useState(false);

  const [selEquipment, setSelEquipment] = useState(null);

  const [viewModal, setViewModal] = useState(false);

  const categoryOptions = [
    "Tractors",
    "Harvesters",
    "Cultivators",
    "Ploughs",
    "Seeders",
    "Sprayers",
  ];

  const [selCategory, setSelCategory] = useState(null);

  const startListening = async () => {
    setIsListening(true);
    try {
      // Native module code to start listening
    } catch (e) {
      console.error(e);
    }
  };

  const stopListening = async () => {
    setIsListening(false);
    try {
      // Native module code to stop listening
    } catch (e) {
      console.error(e);
    }
  };

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
            <Text>{item.obj.Title}</Text>
            <Text>{item.obj.Price}</Text>
            <Text>{item.obj.Description}</Text>
            <Button
              onPress={(e) => {
                setViewModal(true);
                setSelEquipment(item);
              }}
            >
              View More
            </Button>
          </View>
        ))}
      </View>
    );
  };

  const filterByCategory = (category) => {
    setSelCategory(category);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.searchContainer}>
          <View style={styles.searchBox}>
            <IconButton
              icon="magnify"
              color="black"
              size={20}
              onPress={() => console.log("Search pressed")}
            />
            <TextInput
              style={styles.searchText}
              value={searchText}
              onChangeText={setSearchText}
              placeholder="Search by product, brand & more..."
            />
            <IconButton
              icon="microphone"
              color={isListening ? "red" : "black"}
              size={20}
              onPress={isListening ? stopListening : startListening}
            />
          </View>
          <Text>{searchText}</Text>
        </View>
        <View style={styles.categoryContainer}>
          <FlatList
            data={categoryOptions}
            renderItem={({ item }) => (
              <Button style={styles.cateBtn} mode={selCategory === item ? "contained" : 'outlined'} onPress={e => filterByCategory(item)}>
                {item}
              </Button>
            )}
            keyExtractor={(item) => item}
            horizontal={true}
          />
        </View>
      </View>
      <ScrollView style={styles.body}>{showProducts()}</ScrollView>
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
    padding: 0,
  },
  header: {
    // backgroundColor: "#ccc",
    padding: 16,
  },
  body: {
    flex: 1,
    padding: 16,
  },
  productImage: {
    width: "100%",
    height: 300,
    borderRadius: 20,
  },
  productContainer: {
    marginBottom: 40,
  },
  searchContainer: {
    marginBottom: 16,
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    paddingHorizontal: 12,
    marginBottom: 8,
  },
  searchText: {
    flex: 1,
    marginLeft: 8,
    color: "gray",
  },
  cateBtn: {
    marginHorizontal: 4,
  
  }
});

export default Equipmentsbrowser;

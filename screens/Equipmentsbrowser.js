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

const Equipmentsbrowser = ({navigation, setCartOpen}) => {
  const [equipmentList, setEquipmentList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [isListening, setIsListening] = useState(false);

  const [masterList, setMasterList] = useState([]);

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
      setMasterList(data);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchEquipmentData();
  }, []);

  const filterEquipmentsByName = (text) => {
    const filteredList = masterList.filter((item) =>
      item.obj.Title.includes(text)
    );
    setEquipmentList(filteredList);
  }

  const showProducts = () => {
    return (
      <View>
        {equipmentList.map((item) => (
          <View style={styles.productContainer}>
            <Image
              source={{ uri: item.obj.Image }}
              style={styles.productImage}
            />
            <Text style={styles.title}>{item.obj.Title}</Text>
            <Text style={styles.price}>₹{item.obj.Price}</Text>
            <Text style={styles.description}>{item.obj.Description}</Text>
            <Button

            mode="contained"
            style={{ marginTop: 16 }}
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
              // value={searchText}
              onChangeText={text => filterEquipmentsByName(text)}
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
          setCartOpen={setCartOpen}
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
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 16,

  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 8,
  },
  description: {
    fontSize: 16,
    marginTop: 8,
  },

});

export default Equipmentsbrowser;

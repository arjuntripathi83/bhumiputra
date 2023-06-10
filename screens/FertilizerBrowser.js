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
import FertilizersData from "./FertilizersList";
import app from "../firebaseConfig";
import { Button, IconButton, TouchableOpacity } from "react-native-paper";
import FertilizersDetails from "./FertilizersDetails";
import Carousel from "react-native-snap-carousel";

const FertilizersBrowser = ({ navigation, setCartOpen }) => {
  const [fertilizersList, setFertilizersList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [isListening, setIsListening] = useState(false);
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
      setFertilizersList(data);
      setLoading(false);
    });
  };

  const categoryOptions = [
    "Composter",
    "Zincoz",
    "Paddy microbes",
    "Vanproz Super",
    "Azospiriloz",
    "Rhizoz",
  ];

  const [selCategory, setSelCategory] = useState(null);

  useEffect(() => {
    fetchFertilizerData();
  }, []);

  const filterFertilizersByName = (text) => {
    const filteredList = fertilizersList.filter((item) =>
      item.obj.Title.includes(text)
    );
    setFertilizersList(filteredList);
  };

  const showProducts = () => {
    return (
      <View>
        {fertilizersList.map((item) => (
          <View style={styles.productContainer} key={item.id}>
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
                setSelFertilizer(item);
              }}
            >
              View More
            </Button>
          </View>
        ))}
      </View>
    );
  };

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
              onChangeText={(text) => filterFertilizersByName(text)}
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
      {selFertilizer && (
        <FertilizersDetails
          FertilizerData={selFertilizer}
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

export default FertilizersBrowser;

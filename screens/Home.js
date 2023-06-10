import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput, ImageBackground } from 'react-native';
import { IconButton } from 'react-native-paper';
import Carousel from 'react-native-snap-carousel';
import WeatherForecastPage from './WheatherForecastPage';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import Footer from './Footer';
import RentalEquipmentPage from './RentalEquipmentPage';

const BlockCard = ({ imgPath, text }) => {
  return (
    <ImageBackground
      source={imgPath} // Replace with your background image
      style={styles.blockBackground}
      resizeMode="cover"
    >
      <LinearGradient
        // Button Linear Gradient
        colors={['#0000007a', '#00000054', '#00000094']}
        style={styles.blockGradient}
      >
        <Text style={styles.blockText}>{text}</Text>
      </LinearGradient>
    </ImageBackground>
  );
};

const Home = () => {
  const [searchText, setSearchText] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [rentalOpen, setRentalOpen] = useState(false);
  const navigation = useNavigation();

  const [weatherOpen, setWeatherOpen] = useState(false);

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

  const onSpeechResults = (event) => {
    setSearchText(event.value[0]);
  };

  const carouselItems = [
    {
      id: 1,
      title: 'Item 1',
      uri: 'https://th.bing.com/th/id/OIP.1BFImfy-kcfN7hrCI1bJ5gHaH3?pid=ImgDet&rs=1'
    },
    {
      id: 2,
      title: 'Item 2',
      uri: 'https://www.deere.com/assets/images/common/products/tractors/8rx-370-with-truck-1024x576.jpg'
    },
    {
      id: 3,
      title: 'Item 3',
      uri: 'https://www.deere.com/assets/images/common/products/tractors/8rx-370-with-truck-1024x576.jpg'
    }
  ];

  const renderCarouselItem = ({ item }) => (
    <View style={styles.carouselItem}>
      <Text style={styles.carouselTitle}>{item.title}</Text>
      <Image source={{ uri: item.uri }} style={styles.carouselImage} />
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <WeatherForecastPage visible={weatherOpen} setVisible={setWeatherOpen} />
      <RentalEquipmentPage visible={rentalOpen} setVisible={setRentalOpen} />
      <View>
        <Text style={styles.logo}>FARM TRADE</Text>
      </View>
      <View style={styles.section}>
        <TouchableOpacity style={styles.category} onPress={() => navigation.navigate('EquipmentBrowser')}>
          {/* <View > */}
          <Image resizeMode="contain" style={styles.categoryIcon} source={require('../assets/icons/equipments.png')} />
          <Text style={styles.categoryText}>Equipments</Text>
          {/* </View> */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.category} onPress={() => navigation.navigate('FertilizerBrowser')}>
          <Image resizeMode="contain" style={styles.categoryIcon} source={require('../assets/icons/fertilizer_icon.png')} />
          <Text style={styles.categoryText}>Fertilizers</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.category} onPress={() => navigation.navigate('Seedsbrowser')}>
          <Image resizeMode="contain" style={styles.categoryIcon} source={require('../assets/icons/seeds.png')} />
          <Text style={styles.categoryText}>Seeds</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <TouchableOpacity style={styles.category} onPress={() => setRentalOpen(true)}>
          <Image resizeMode="contain" style={styles.categoryIcon} source={require('../assets/icons/real-estate.png')} />
          <Text style={styles.categoryText}>Rental</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.category} onPress={() => navigation.navigate('ColdStoragePage')}>
          <Image resizeMode="contain" style={styles.categoryIcon} source={require('../assets/icons/coldstorage.png')} />
          <Text style={styles.categoryText}>Cold storages'</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.category} onPress={(e) => setWeatherOpen(true)}>
          <Image resizeMode="contain" style={styles.categoryIcon} source={require('../assets/icons/weather.png')} />
          <Text style={styles.categoryText}>Weathe Forecast</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('EquipmentBrowser')}>
        <BlockCard imgPath={require('../assets/images/farming-equipment.jpg')} text={'Equipments'} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Seedsbrowser')}>
        <BlockCard imgPath={require('../assets/images/Seeds.jpeg')} text={'Seeds'} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('FertilizerBrowser')}>
        <BlockCard imgPath={require('../assets/images/fertilizers.jpg')} text={'Fertilizers'} />
      </TouchableOpacity>
      <Footer />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
  searchContainer: {
    marginBottom: 16
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    paddingHorizontal: 12,
    marginBottom: 8
  },
  searchText: {
    flex: 1,
    marginLeft: 8,
    color: 'gray'
  },
  carouselItem: {
    marginBottom: 16
  },
  carouselTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8
  },
  carouselImage: {
    width: '100%',
    height: 200
  },
  suggestedButton: {
    backgroundColor: 'skyblue',
    borderRadius: 4,
    padding: 12,
    alignItems: 'center'
  },
  suggestedButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
  productSection: {
    marginBottom: 16
  },
  productContainer: {
    width: '100%',
    marginBottom: 8,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    padding: 8
  },
  productImage: {
    width: '100%',
    height: 200,
    marginBottom: 8
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  topItemsButton: {
    backgroundColor: 'grey',
    borderRadius: 4,
    padding: 12,

    alignItems: 'center',
    marginBottom: 16
  },
  topItemsButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20
  },
  category: {
    width: '20%',
    height: 80,
    borderRadius: 4
  },
  categoryIcon: {
    width: '100%',
    height: '100%'
  },
  logo: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16
  },
  blockGradient: {
    height: 200,
    flexDirection: 'row',
    alignItems: 'flex-end',
    borderRadius: 20,
    padding: 26
  },
  blockText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  },
  blockBackground: {
    height: 200,
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 16
  },

  categoryText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'darkgreen',
    textAlign: 'center',
    marginBottom: 10
  }
});

export default Home;

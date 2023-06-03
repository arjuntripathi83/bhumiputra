import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { IconButton } from 'react-native-paper';
import Carousel from 'react-native-snap-carousel';
import WeatherForecastPage from './WheatherForecastPage';

const Home = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [isListening, setIsListening] = useState(false);

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
      <View style={styles.section}>
        <View style={styles.category}>
          <Image resizeMode='contain' style={styles.categoryIcon} source={require('../assets/icons/equipments.png')} />
          <Text>Equipments</Text>
        </View>
        <View style={styles.category}>
          <Image resizeMode='contain' style={styles.categoryIcon} source={require('../assets/icons/fertilizer.png')} />
          <Text>Equipments</Text>
        </View>
        <View style={styles.category}>
          <Image resizeMode='contain' style={styles.categoryIcon} source={require('../assets/images/equipment-category.png')} />
          <Text>Equipments</Text>
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.category}>
          <Image resizeMode='contain' style={styles.categoryIcon} source={require('../assets/images/equipment-category.png')} />
          <Text>Equipments</Text>
        </View>
        <View style={styles.category}>
          <Image resizeMode='contain' style={styles.categoryIcon} source={require('../assets/images/equipment-category.png')} />
          <Text>Equipments</Text>
        </View>
        <View style={styles.category}>
          <TouchableOpacity onPress={e => setWeatherOpen(true)}>
          <Image resizeMode='contain' style={styles.categoryIcon} source={require('../assets/icons/weather.png')} />
          <Text>Weather Forecast</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.productSection}>
        <TouchableOpacity
          onPress={() => {
            console.log('Product 1 pressed');
            navigation.navigate('Equipmentsbrowser');
          }}
        >
          <View style={styles.productContainer}>
            <Image
              source={{
                uri: 'https://th.bing.com/th/id/OIP.qdhvxg0dnLQrzX_SL1GkHgHaEK?pid=ImgDet&rs=1'
              }}
              style={styles.productImage}
            />
            <Text style={styles.productTitle}>Product 1</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.productSection}>
        <View style={styles.productContainer}>
          <Image
            source={{
              uri: 'https://dealernet.s3.amazonaws.com/webres/john-deere-images/dh11-series-disk-harrows.jpg'
            }}
            style={styles.productImage}
          />
          <Text style={styles.productTitle}>Product 2</Text>
        </View>
      </View>
      {/* Add more product containers as needed */}
      <TouchableOpacity style={styles.topItemsButton} onPress={() => console.log('Top Items pressed')}>
        <Text style={styles.topItemsButtonText}>Top Items</Text>
      </TouchableOpacity>
      <View style={styles.productSection}>
        <View style={styles.productContainer}>
          <Image
            source={{
              uri: 'https://th.bing.com/th/id/R.e05f7ef9a31625cb96ab5497abbdc6dd?rik=PpdnCu6JV1Mv2Q&riu=http%3a%2f%2fwww.tractordata.com%2fnews%2f2013%2f08%2fdeere-7290r.jpg&ehk=hGKheqkr36qzYaJ8D8barHQMjPcIPDHIqNmbKITugzM%3d&risl=&pid=ImgRaw&r=0'
            }}
            style={styles.productImage}
          />
          <Text style={styles.productTitle}>Product 1</Text>
        </View>
      </View>
      <View style={styles.productSection}>
        <View style={styles.productContainer}>
          <Image
            source={{
              uri: 'https://th.bing.com/th/id/OIP.h0uYaJhddxcqt0s7jSAmOAHaJe?pid=ImgDet&rs=1'
            }}
            style={styles.productImage}
          />
          <Text style={styles.productTitle}>Product 2</Text>
        </View>
      </View>
      {/* Add more product containers as needed */}
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
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: 16
  },
  category: {
    width: '20%',
    height: 100,
    // backgroundColor: 'skyblue',
    borderRadius: 4,
  },
  categoryIcon: {
    width: '100%',
    height: '100%'

  }
});

export default Home;

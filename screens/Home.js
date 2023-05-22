// import React from "react";
// import { Text, View } from "react-native";
// import Carousel from "react-native-snap-carousel";
// const Home = () => {
//   return (
//     <View>
//       <Text>Home</Text>
//     </View>
//   );
// };

// export default Home;

import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';

class CarouselExample extends Component {
  carouselItems = [
    {
      id: 1,
      title: 'Item 1',
      image: require('./images/image1.jpg')
    },
    {
      id: 2,
      title: 'Item 2',
      image: require('./images/image2.jpg')
    },
    {
      id: 3,
      title: 'Item 3',
      image: require('./images/image3.jpg')
    },
  ];

  renderCarouselItem = ({ item }) => (
    <View>
      <Image source={item.image} />
      <Text>{item.title}</Text>
    </View>
  );

  render() {
    return (
      <View>
        <Carousel
          data={this.carouselItems}
          renderItem={this.renderCarouselItem}
          sliderWidth={300}
          itemWidth={300}
        />
      </View>
    );
  }
}

export default CarouselExample;

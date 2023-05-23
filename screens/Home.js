import React from "react";
import { View, Text, Image } from "react-native";
import Carousel from "react-native-snap-carousel";

const Home = () => {
  const carouselItems = [
    {
      id: 1,
      title: "Item 1",
      uri: "https://www.deere.com/assets/images/common/products/tractors/8rx-370-with-truck-1024x576.jpg",
    },
    {
      id: 2,
      title: "Item 2",
      uri: "https://www.deere.com/assets/images/common/products/tractors/8rx-370-with-truck-1024x576.jpg",
    },
    {
      id: 3,
      title: "Item 3",
      uri: "https://www.deere.com/assets/images/common/products/tractors/8rx-370-with-truck-1024x576.jpg",
    },
  ];

  const renderCarouselItem = ({ item }) => (
    <View>
      <Text>{item.title}</Text>
      <Image source={{ uri: item.uri }} style={{ width: 300, height: 200 }} />
    </View>
  );

  return (
    <View>
      <Text>Home Page</Text>
      <Carousel
        data={carouselItems}
        renderItem={renderCarouselItem}
        sliderWidth={300}
        itemWidth={300}
      />
    </View>
  );
};

export default Home;
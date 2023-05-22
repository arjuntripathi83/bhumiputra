import React from "react";
import { View, Text, Image } from "react-native";

const Home = () => {
  carouselItems = [
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

  return (
    <View>
      <Text>Home Page</Text>
    </View>
  );
};

export default Home;

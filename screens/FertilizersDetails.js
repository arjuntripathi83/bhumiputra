import React from "react";
import { View, Text, Image, StyleSheet, Modal, TouchableOpacity } from "react-native";
import { Button, IconButton } from "react-native-paper";
import { Rating } from "react-native-ratings";
import useProductContext from "../context/ProductContext";
import BadgeIconButton from "./BadgeIconButton";

const FertilizersDetails = ({
  fertilizerData,
  visible,
  setVisible,
  setCartOpen,
}) => {
  const ratingCompleted = (rating) => {
    console.log("Rating is: " + rating);
  };

  const { addItemToCart, getCartItemsCount, addToFavoriteList, isInFavoriteList, removeItemFromFavoriteList } = useProductContext();

  return (
    <Modal
      visible={visible}
      onRequestClose={() => setVisible(false)}
      animationType="slide"
    >
      <View style={styles.container}>
        <View style={styles.topBar}>
          <IconButton
            icon="arrow-left"
            color="black"
            size={20}
            onPress={() => setVisible(false)}
          />
          <View style={styles.topRightButtons}>
            <IconButton
              icon="magnify"
              color="black"
              size={20}
              onPress={() => console.log("Search pressed")}
            />
            <BadgeIconButton
              icon="cart"
              badgeContent={getCartItemsCount()}
              size={20}
              onPress={() => {
                setCartOpen(true);
              }}
            />
          </View>
        </View>
        <View>
          <View style={styles.favIcon}>
            <IconButton
              onPressOut={isInFavoriteList(fertilizerData.id) ? () => removeItemFromFavoriteList(fertilizerData.id) : () => addToFavoriteList(fertilizerData.obj)}
              icon={isInFavoriteList(fertilizerData.id) ? "heart" : "heart-outline"}
              iconColor="red"
              size={20}
            />
          </View>
          <View style={styles.shareIcon}>
            <IconButton
              icon="share-variant"
              iconColor="#000"
              size={20}
              onPress={() => console.log("Share pressed")}
            />
          </View>
          <Image
            source={{
              uri: fertilizerData.obj.Image,
            }}
            style={styles.productImage}
            resizeMode="cover"
          />
        </View>
        <View style={styles.productDetails}>
          <Text style={styles.productTitle}>{fertilizerData.obj.Title}</Text>
          <Text style={styles.productPrice}>{fertilizerData.obj.Price}</Text>
          <Text style={styles.productDescription}>
            {fertilizerData.obj.Description}
          </Text>
          <View style={styles.ratingContainer}>
            <Rating
              onFinishRating={ratingCompleted}
              style={{ paddingVertical: 10 }}
            />
            <Text style={styles.productReviews}>1234 Reviews</Text>
          </View>
          <Text style={styles.productAvailability}>In Stock</Text>
          {/* Add other product details as needed */}
        </View>
        <Button
          mode="contained"
          onPress={() => {
            addItemToCart(fertilizerData.obj);
          }}
        >
          <Text style={styles.addToCartButtonText}>Add to Cart</Text>
        </Button>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  topRightButtons: {
    flexDirection: "row",
  },
  productImage: {
    width: "100%",
    height: 300,
    marginBottom: 16,
  },
  productDetails: {
    marginBottom: 16,
  },
  productTitle: {
    fontSize: 16,
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  productDescription: {
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  productReviews: {
    marginLeft: 8,
    fontSize: 14,
    color: "gray",
  },
  productAvailability: {
    marginBottom: 8,
    fontWeight: "bold",
  },
  addToCartButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  favIcon: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 1,
    backgroundColor: "#fff",
    borderRadius: 50,
  },
  shareIcon: {
    position: "absolute",
    top: 10,
    left: 10,
    zIndex: 1,
    backgroundColor: "#fff",
    borderRadius: 50,
  },
});

export default FertilizersDetails;

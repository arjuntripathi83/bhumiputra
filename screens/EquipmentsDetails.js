import React from "react";
import { View, Text, Image, StyleSheet, Modal } from "react-native";
import { IconButton } from "react-native-paper";
import { Rating } from "react-native-ratings";

const EquipmentsDetails = ({ equipmentData, visible, setVisible }) => {
  const ratingCompleted = (rating) => {
    console.log("Rating is: " + rating);
  };

  return (
    <Modal
      visible={visible}
      onRequestClose={() => setVisible(false)}
      animationType="slide"
    >
      <View style={styles.container}>
        <View>
          <Image
            source={{
              uri: equipmentData.obj.Image,
            }}
            style={styles.productImage}
            resizeMode="cover"
          />
          <View
            style={{
              position: "absolute",
              right: 10,
              top: 10,
              backgroundColor: "transparent",
            }}
          >
            <IconButton
              icon="heart"
              color="red" // Changed 'iconColor' to 'color'
              size={20}
              onPress={() => console.log("Pressed")}
            />
          </View>
        </View>
        <View style={styles.productDetails}>
          <Text style={styles.productBrand}>{equipmentData.obj.Brand}</Text>
          <Text style={styles.productTitle}>{equipmentData.obj.Title}</Text>
          <Text style={styles.productPrice}>{equipmentData.obj.Price}</Text>
          <Text style={styles.productDescription}>
            {equipmentData.obj.Description}
          </Text>
          <View style={styles.productRating}>
            <Rating
              showRating
              onFinishRating={ratingCompleted} // Removed 'this.' from 'this.ratingCompleted'
              style={{ paddingVertical: 10 }}
            />
          </View>
          <Text style={styles.productReviews}>Reviews: 1234</Text>
          <Text style={styles.productAvailability}>In Stock</Text>
          {/* Add other product details as needed */}
        </View>
        <View style={styles.addToCartButton}>
          <Text style={styles.addToCartButtonText}>Add to Cart</Text>
        </View>
        <View style={styles.buyNowButton}>
          <Text style={styles.buyNowButtonText}>Buy Now</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
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
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 16,
    marginBottom: 8,
  },
  productDescription: {
    marginBottom: 8,
  },
  productRating: {
    marginBottom: 4,
  },
  productReviews: {
    marginBottom: 4,
  },
  productAvailability: {
    marginBottom: 8,
    fontWeight: "bold",
  },
  addToCartButton: {
    backgroundColor: "blue",
    borderRadius: 4,
    padding: 12,
    alignItems: "center",
  },
  addToCartButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  buyNowButton: {
    backgroundColor: "yellow",
    borderRadius: 4,
    padding: 12,
    alignItems: "center",
  },
  buyNowButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default EquipmentsDetails;
import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Modal } from "react-native";
import { Rating, productRating } from 'react-native-ratings';
const EquipmentsDetails = ({ equipmentData, visible, setVisible }) => {
  return (
    <Modal
      visible={visible}
      onRequestClose={(e) => setVisible(false)}
      animationType="slide"
    >
      <View style={styles.container}>
      <View style={styles.whishlistButton}>
          <Text style={styles.whishlistButton}>Add to Cart</Text>
        </View>
        <Image
          source={{
            uri: equipmentData.obj.Image,
          }}
          style={styles.productImage}
          resizeMode="cover"
        />
        <View style={styles.productDetails}>
        <Text style={styles.productBrand}>{equipmentData.obj.Brand}</Text>
          <Text style={styles.productTitle}>{equipmentData.obj.Title}</Text>
          <Text style={styles.productPrice}>{equipmentData.obj.Price}</Text>
          <Text style={styles.productDescription}>{equipmentData.obj.Description}</Text>
          <Text style={styles.productRating}>count={11}
  reviews={["Terrible", "Bad", "Good", "Very Good","Excelent"]}
  defaultRating={11}
  size={20}
  <Rating
  showRating
  onFinishRating={this.ratingCompleted}
  style={{ paddingVertical: 10 }}
/>
</Text>

          <Text style={styles.productReviews}>Reviews: 1234</Text>
          <Text style={styles.productAvailability}>In Stock</Text>
          {/* Add other product details as needed */}
        </View>
        <View style={styles.addToCartButton}>
          <Text style={styles.addToCartButtonText}>Add to Cart</Text>
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
  whishlistButton: {
    Type: "Heart",
    backgroundColor: "red",
    borderRadius: 4,
    padding: 12,

  },
  ratingCompleted(rating) {
    console.log("Rating is: " + rating)
  }
});

export default EquipmentsDetails;

import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Modal } from "react-native";

const EquipmentsDetails = ({ equipmentData, visible, setVisible }) => {
  return (
    <Modal
      visible={visible}
      onRequestClose={(e) => setVisible(false)}
      animationType="slide"
    >
      <View style={styles.container}>
        <Image
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/bhumiputra-ed2ee.appspot.com/o/Equipments%2Ftransplanters%20jd.jpg?alt=media&token=5a8a31d0-0403-4d85-87ed-c1e6776d663d",
          }}
          style={styles.productImage}
          resizeMode="cover"
        />
        <View style={styles.productDetails}>
          <Text style={styles.productTitle}>Utkarsh Agro-Composter</Text>
          <Text style={styles.productPrice}>Rs328</Text>
          <Text style={styles.productDescription}>
            For Quick Decomposition Of Organic Waste Into Compost, Bio
            Fertilizers
          </Text>
          <Text style={styles.productRating}>Rating: 4.5/5</Text>
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
});

export default EquipmentsDetails;

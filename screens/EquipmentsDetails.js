 import React from 'react';
    import { View, Text, Image, StyleSheet } from 'react-native';
    
    const EquipmentsDetails = () => {
      return (
        <View style={styles.container}>
          <Image
            source={require('https://cdn.shopify.com/s/files/1/0755/5416/0953/files/5H0A0707-scaled-1.jpg?v=1683283403')}
            style={styles.productImage}
            resizeMode="cover"
          />
          <View style={styles.productDetails}>
            <Text style={styles.productTitle}>Utkarsh Agro-Composter</Text>
            <Text style={styles.productPrice}>Rs328</Text>
            <Text style={styles.productDescription}>
            For Quick Decomposition Of Organic Waste Into Compost, Bio Fertilizers
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
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        padding: 16,
      },
      productImage: {
        width: '100%',
        height: 300,
        marginBottom: 16,
      },
      productDetails: {
        marginBottom: 16,
      },
      productTitle: {
        fontSize: 18,
        fontWeight: 'bold',
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
        fontWeight: 'bold',
      },
      addToCartButton: {
        backgroundColor: 'blue',
        borderRadius: 4,
        padding: 12,
        alignItems: 'center',
      },
      addToCartButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
      },
    });
    
    export default ProductDetailsPage;



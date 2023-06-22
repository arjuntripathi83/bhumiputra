import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';

const products = [
  {
    id: 1,
    title: 'Product 1',
    brand: 'Brand 1',
    price: '$10',
    image: require('./assets/product1.jpg'),
  },
  {
    id: 2,
    title: 'Product 2',
    brand: 'Brand 2',
    price: '$20',
    image: require('./assets/product2.jpg'),
  },
  // Add more products as needed
];

const PaymentOptions = () => (
  <View style={styles.paymentContainer}>
    <Text style={styles.paymentText}>Payment Options:</Text>
    {/* Add your payment options here */}
  </View>
);

const ProductCard = ({ title, brand, price, image }) => (
  <View style={styles.productCard}>
    <Image style={styles.productImage} source={image} />
    <View style={styles.productInfo}>
      <Text style={styles.productTitle}>{title}</Text>
      <Text style={styles.productBrand}>{brand}</Text>
      <Text style={styles.productPrice}>{price}</Text>
    </View>
  </View>
);

const BookingPage = () => {
  const [showPayment, setShowPayment] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Purchased Products:</Text>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          brand={product.brand}
          price={product.price}
          image={product.image}
        />
      ))}

      <Text style={styles.paymentToggle} onPress={() => setShowPayment(!showPayment)}>
        {showPayment ? 'Hide Payment Options' : 'Show Payment Options'}
      </Text>

      {showPayment && <PaymentOptions />}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#f2f2f2',
  },
  productImage: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  productInfo: {
    flex: 1,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productBrand: {
    fontSize: 14,
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  paymentToggle: {
    fontSize: 16,
    color: 'blue',
    marginTop: 10,
    marginBottom: 20,
  },
  paymentContainer: {
    marginTop: 20,
  },
  paymentText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default BookingPage;